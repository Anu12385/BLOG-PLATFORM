import { Hono } from 'hono'
import { getPrisma } from '../db'
import { sign ,verify} from 'hono/jwt'
import { signupinput,signininput } from 'anu089-medium'

import { hashedpass,verifypass } from '../password'
export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const { success } = signupinput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }
    const passwordHash=await hashedpass(body.password);
    const prisma = getPrisma(c.env.DATABASE_URL);
    
    try {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: passwordHash,
          name: body.name
        }
      })
      console.log("USER IS CREATED ");
      const jwt = await sign({
        id: user.id
      }, c.env.JWT_SECRET);
  
      return c.text(jwt)
    } catch(e) {
      console.log(e);
      c.status(411);
      return c.text('Invalid')
    }
  })
  
  
  userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const { success } = signininput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }

    const prisma = getPrisma(c.env.DATABASE_URL);
  
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: body.email,
        }
      })
      if (!user || !(verifypass(body.password,user.password))) {
        c.status(403);
        return c.json({
          message: "Invalid email or Invalid password"
        },401)
      }
      const jwt = await sign({
        id: user.id
      }, c.env.JWT_SECRET);
  
      return c.text(jwt)
    } catch(e) {
      console.log(e);
      c.status(411);
      return c.text('Invalid')
    }
  })