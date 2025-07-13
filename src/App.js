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
import Cart from "./components/Pages/Cart";
import Checkout from "./components/Pages/Checkout";
import CompleteCheckout from "./components/Pages/CompleteCheckout";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart"));
    if (localCart) {
      setCart(localCart);
    }
  }, []);

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
        <Route path="/shop" element={<Purchase cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cartApp={cart} setCartApp={setCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/complete-checkout" element={<CompleteCheckout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
