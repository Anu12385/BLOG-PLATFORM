import {BrowserRouter,Route,Routes} from 'react-router-dom'

import { Signin } from './pages/signin'
import { Signup } from './pages/signup'
import { Blog } from './pages/blog'
import { Blogs}  from './pages/blogs'
import { Publish } from './pages/publish'
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path="/signup" element={<Signup/>}/>
        <Route  path="/signin" element={<Signin/>}/>
        <Route  path="/blog/:id" element={<Blog/>}/>
        <Route  path="/blogs" element={<Blogs/>}/>
        <Route  path="/publish" element={<Publish/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
