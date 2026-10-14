npm create vite@latest
cd frontend
npm run 


                 VITE
                  │
        ┌─────────┴─────────┐
        ↓                   ↓
   React Plugin        Tailwind Plugin
        ↓                   ↓
 React features        Tailwind CSS

 now in the viteconfig.ts add 
 ->import tailwindcss from '@tailwindcss/vite'
 so that we can use the funtions of tailwind css , similiar like react 

## React Router
 This is from React Router, and its purpose is to let your React application have different pages/URLs without actually reloading the browser page.


 <BrowserRouter>
  <Routes>

  </Routes>
</BrowserRouter>



## BrowserRouter enables routing in your React application.It watches the browser's URL.

##<Routes>-> this the container for the route defines
like 

<Route
  path="/login"
  element={<Login />}
/>

so a route is basically connect the url to a commponent which will render data when we click on the endpoint


This means:

hidden → hidden by default
md:block → show it on medium screens and larger

<div class="hidden md:block">
  <!-- Left sidebar -->
</div>

when screen is greater then md then show whole screen else hidden by default


## <Link  to="/signin>Login </Link>  this is import from the react-router-dom


## how to set value of   in state variable when on input some value which is onChange in input box
const [postinput,setpostinput]=useState<SignupInput>({
        email: "",
        password:"",
        name:" "
       
 });

OnChange((e)=>{
  setpostinput(
    ...postinput
    ,name=e.target.value;|| email=e.target.value|| password=e.target.value any among the three can be use and the other two value will be set already 
  )
})

## how to have ****** shown as password we can just sent type="password" as the props



grid  grid-cols-1 lg: grid-cols-2    (default it is single colums when greater then lg 2 colums )

## how to get the token from the backend while sending data from the frontend to backend

-> we are using axios to post data  to the backend route then get the token in response then set it into localStorage then navigate to "/blog"  
-> Here backend url is just localhost:3000 depending on what we get 
-> to navigate to /blog we use navigate from react-router-dom

async function  Datapost(){
        try{
          const response= await axios.post("${BACKEND_URL}/api/v1/user/signup",state variable where data is store);

          const token= await response.data;
          localStorage.setItem("token",token);

        }catch(error)
        {
           throw new Error("Backend connection failed ");
        }
        

     }