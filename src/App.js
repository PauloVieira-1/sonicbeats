import { Routes, Route } from "react-router-dom";
import Home from "../src/components/Pages/Home/Home"
import About from "../src/components/Pages/About"
import NavRounded from "./components/Navbar/Nav";

function App() {

  return (
    <>
        <NavRounded />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes> 
    </>
  )

}

export default App;
