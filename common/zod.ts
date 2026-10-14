import z from "zod";

export const signupinput = z.object({
  email: z.string(),
  password: z.string().min(6),
  name:z.string().optional()
});

export type SignupInput = z.infer<typeof signupinput>;

export const signininput = z.object({
  email: z.string(),
  password: z.string().min(6),
});

export type SigninInput = z.infer<typeof signininput>;

export const createbloginput=z.object({
    title:z.string(),
    content:z.string()

})

export type Createbloginput=z.infer<typeof createbloginput>

export const Updatabloginput=z.object({
    title:z.string(),
    content:z.string(),
    id:z.number()

})

export type Updatabloginput=z.infer<typeof Updatabloginput>