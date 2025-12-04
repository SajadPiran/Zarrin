import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import Blogs from "../pages/Blogs/Blogs.tsx";

function App() {

  return (
    <Routes>
       <Route path="/" element={ <Home/> }></Route>
       <Route path="/blogs" element={ <Blogs/> }></Route>
    </Routes>
  )
}

export default App
