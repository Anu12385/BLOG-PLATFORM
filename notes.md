mkdir backend
cd backend 
npm  create hono@latest


Prisma Postgres = PostgreSQL + Accelerate Built-In
Prisma Postgres is Prisma's own hosted PostgreSQL database service. When you use Prisma Postgres, Accelerate comes bundled automatically - you don't need to set it up separately or pay extra for it


## what is connection pooling ?

Connection pooling is like having a shared taxi service instead of everyone owning their own car.

The Problem It Solves
Without Pooling (Bad):
Every time your app needs to talk to the database:

text
User 1 visits → Opens new database connection → Uses it → Closes it
User 2 visits → Opens new database connection → Uses it → Closes it  
User 100 visits → Opens 100th connection → Database crashes 💥
Each connection:

Takes ~2-3 seconds to establish

Uses ~2-10 MB of memory

Has a limit (usually 100-500 max)

With Pooling (Good):
text
Pool of 10 pre-opened connections:
┌─────────────────────┐
│ Connection 1 (ready) │← User 1 uses this
│ Connection 2 (ready) │← User 2 uses this
│ Connection 3 (ready) │← User 3 uses this
│ ...                  │
│ Connection 10 (ready)│← Shared by multiple users
└─────────────────────┘


-> so Here we have fixed no of connection with the database and user's switch on these same connections  when one user dont other switch it's place 

-> when all user established a connection and taking long time for querying other user have to wait this is called starvation for that neon dont allow any connection for more then 30 sec it break connection and allow it for the other user 

npm install prisma
npm prisma init



## after creation of the model we have to  push schema to database(migration)

Migrate your database" means:
Changing your database structure (schema) to match your Prisma models.


steps:

1. npx prisma generate (generate client which is used to manipulate database(insert data, get data etc ))
2. then migrate it or push the table structure create as schema to current data base or replace it with the old one( npx prisma db push )
3. npm run dev

-> we do npm install @prisma/client  this is used in the db.ts file which is basically use in pooling in with url



## how to do pooling with neon url ?
-> put url in .env file then create db.ts file in prisma folder 
then run few command that all 
the use of db.ts file is all the new connection created move to this file once then pooling happen without this 

// Every request creates a new connection
const prisma = new PrismaClient() // New connection
await prisma.user.findMany()

now only one time it happen check db.ts


## import { PrismaClient } from '@prisma/client'(this is create by prisma generate command which help in db.ts to create client)

-> IMPORTANT-> there are 10 connection in prisma instance 


## how to access environment variable(JWT_TOKEN) in the file 
-> .config file(create .config file and then export)
-> process.env.JWT_screat
-> hono/adapter 

## syntax of jwt token = ({id:, email:, etc}, secretkey)



const user = await prisma.user.create({
  data: {
    email: "test@example.com",
    password: "password123"
  }
})

console.log(user)
 Output:
  {
  id: 1,
   email: "test@example.com",
   password: "password123"
 }
 
 ## here this function will return id which we use in jwt token by which we can use in check in signin route that this perticular user exist in database 




The 5 things you really need to remember

For Neon pooling + Prisma + Cloudflare Workers:

1. Neon pooled DATABASE_URL
             ↓
2. Prisma schema uses DATABASE_URL
             ↓
3. @prisma/adapter-neon
             ↓
4. PrismaClient({ adapter })
             ↓
5. Hono c.env.DATABASE_URL
Commands you used
npm install prisma@6.19.0 @prisma/client@6.19.0
npm install @prisma/adapter-neon
npx prisma validate
npx prisma generate
npx prisma db push
npm run dev




## Method	Use when in prisma 
1. findUnique ->	Querying by a field marked @id or @unique
2. findFirst -> Querying by any field (non-unique),returns  
3. first -> match or null
4. findMany	-> You want all matching records


## what is a middleware ?
->a middleware is a function which run before the route call  , first the middleware runs then the route runs 



## what is the importance of use of middleware here?
we can directly go to /blog even with sign in or sign out so after sign in/up control reach to middleware where it verify token then allow to move to /blog the main page


/blog request
     ↓
Authorization header
     ↓
Bearer JWT
     ↓
Middleware
     ↓
verify JWT
     ↓
Valid?
 ┌───┴───┐
No      Yes
↓        ↓
401     /blog


after signin client put token in auth header which is verify by middleware before go to next()



## we can use c.set(data) function to store the data into the middleware  and can get it in some other routes 


/user->global middleware->route->response 
this is the order of running 


## how to publish your code to npm then can import to any package

->move to the folder you want to publish
->set the name in package.json
->run tsc-b to make index.js file which is what we have to publish
->the most important code 

1. npm login
2. npm publish

then you and use it in different folder like npm install package name

import{export stuff from .js} form "package name"

