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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Logo from "./assets/jpeg/Logo2.jpeg";
import { Container } from "react-bootstrap";

const stripePromise = loadStripe(
  "pk_test_51QMYorFhBZUQjeLQBntca2dZJ2i8IKltEPhKRt298k59vWIJH25NIRsTqBjpWyHB5qDB90q3FK5M827UWbOXOEZ900hB0QudX3",
); //Callig here avoids re-creating the Stripe object on every render

function App() {
  // let cart = [{ name: "test", count: 1 }];
  // const cart = useContext(CartContext);

  const [clientSecret, setClientSecret] = useState(null); // default value of a different type

  const options = {
    clientSecret: clientSecret,
    appearance: {
      theme: "stripe",
    },
    loader: "auto",
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));

    fetch("http://localhost:4242/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });

    console.log(cart);
  }, []);

  if (!clientSecret) {
    return (
      <Container
        className="d-flex justify-content-center text-center align-items-center"
        style={{ height: "100vh" }}
      >
        <img
          src={Logo}
          className="img-fluid"
          alt=""
          style={{ width: "550px", height: "100px" }}
        ></img>
      </Container>
    );
  }

  return (
    <>
      <Elements options={options} stripe={stripePromise}>
        <NavRounded />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/request-product" element={<RequestProduct />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/designprocess" element={<DesignProcess />} />
          <Route path="/additional-services" element={<AdditionalServices />} />
          <Route path="/shop" element={<Purchase />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/complete-checkout" element={<CompleteCheckout />} />
        </Routes>
        <Footer />
      </Elements>
    </>
  );
}

export default App;
