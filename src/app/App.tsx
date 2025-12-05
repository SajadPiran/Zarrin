import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import Blogs from "../pages/Blogs/Blogs.tsx";
import SinglePost from "../pages/SinglePost/SinglePost.tsx";
import AboutUs from "../pages/AboutUs/AboutUs.tsx";

function App() {

  return (
      <Routes>
           <Route path="/" element={ <Home/> }></Route>
           <Route path="/blogs" element={ <Blogs/> }></Route>
           <Route path="/post" element={ <SinglePost/> }></Route>
           <Route path="/about-us" element={ <AboutUs/>}></Route>
      </Routes>
  )
}

export default App
