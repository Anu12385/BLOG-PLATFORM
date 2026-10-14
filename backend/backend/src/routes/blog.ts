import { Hono } from 'hono'
import { getPrisma } from '../db'
import { sign, verify } from 'hono/jwt'
import { Updatabloginput, createbloginput } from 'anu089-medium'

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
  Variables: {
    userId: Number
  }
}>()

//this middleware is run after each route run
blogRouter.use("/*", async (c, next) => {
  const data = c.req.header("Authorization");

  if (!data) {
    c.status(403);
    return c.json({
      msg: "you are not logged in"
    });
  }
  const token =  data.split(" ")[1];
  const verified: any = await verify(token, c.env.JWT_SECRET, "HS256")

  if (verified) {
    const store = verified.id;
    c.set("userId", store);
    await next();
  } else {
    c.status(403);
    return c.json({
      msg: "you are not logged "
    })
  }
})

blogRouter.post('/g', async (c) => {

  const body = await c.req.json();
  const { success } = createbloginput.safeParse(body);
  if (!success) {
    c.status(411)
    return c.json({
      msg: "invalid input "
    })
  }
  const userId = c.get("userId")

  const prisma = getPrisma(c.env.DATABASE_URL)
  const postss = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: Number(userId)
    }
  })



  return c.json({
    id: postss.id
  })
})



blogRouter.put('/up', async (c) => {

  const body = await c.req.json();
  const { success } = Updatabloginput.safeParse(body);
  if (!success) {
    c.status(411)
    return c.json({
      msg: "invalid input "
    })
  }
  const prisma = getPrisma(c.env.DATABASE_URL)

  const putts = await prisma.post.update({
    where: {
      id: body.id
    },
    data: {
      title: body.title,
      content: body.content
    }
  })

  return c.json({
    id: putts.id
  })
})

//bring all the title of the blogs not all the content

blogRouter.get('/bulk', async (c) => {

  const prisma = getPrisma(c.env.DATABASE_URL);

  const store = await prisma.post.findMany({
    select: {
      content: true,
      title: true,
      id: true,
      author: {
        select: {
          name: true
        }
      }

    }
  });

  return c.json({
    store
  })
});


blogRouter.get('/:id', async (c) => {

  const gett = await c.req.param("id");
  const prisma = getPrisma(c.env.DATABASE_URL)

  try {
    const getts = await prisma.post.findMany({
      where: {
        id: Number(gett)
      },
      select:{
        id:true,
        title:true,
        content:true,
        author:{
          select:{
            name:true
          }
        }

      }
    })
    return c.json({
      getts
    })
  } catch (e) {
    c.status(411)
    return c.json({
      msg: "error in fetching blog"
    })
  }
})


