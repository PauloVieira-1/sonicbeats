import { Routes, Route } from "react-router-dom";
import Home from "../src/components/Pages/Home";
import About from "../src/components/Pages/About";
import Gallery from "../src/components/Pages/Gallery";
import RequestProduct from "../src/components/Pages/RequestProduct";
import NavRounded from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import DesignProcess from "./components/Pages/DesignProcess";
import AdditionalServices from "./components/Pages/AditionalServices";
import Purchase from "./components/Pages/Purchase";

function App() {
  return (
    <>
      <NavRounded />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/request-product" element={<RequestProduct />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/designprocess" element={<DesignProcess />} />
        <Route path="/additional-services" element={<AdditionalServices />} />
        <Route path="/shop" element={<Purchase />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
