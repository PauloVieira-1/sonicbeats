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
import FailPage from "./components/Pages/FailPage";

const stripePromise = loadStripe(
  "pk_test_51QsRhPFb6wjMdquvTpSk3zcc0QmBsfpgFj93vYigON7NbdTQiGxNFVXRGpDMocPA6nHE4dayUS3Nrgly5a9g55u4005hIKHfTg",
); //Calling here avoids re-creating the Stripe object on every render

function App() {

  const [clientSecret, setClientSecret] = useState(null); // default value of a different type
  const [cart, setCart] = useState([]);

  const options = {
    clientSecret: clientSecret,
    appearance: {
      theme: "stripe",
    },
    loader: "auto",
  };

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = [];
    }
    setCart(cart);
  }, []);

  useEffect(() => {
  
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
  }, [cart]); 


  // useEffect(() => {
  //   const handlePayment = async () => {
  //     if (!clientSecret) return; 
  
  //     const stripe = await stripePromise;
  //     if (!stripe) {
  //       console.error("Stripe failed to initialize.");
  //       return;
  //     }
  
  //     const { paymentIntent, error } = await stripe.confirmPayment(clientSecret);
  
  //     if (error) {
  //       console.error("Error confirming card payment:", error);
  //     } else if (paymentIntent && paymentIntent.status === "succeeded") {
  //       console.log("Payment succeeded!");
  //     }
  //   };
  
  //   if (clientSecret) {
  //     handlePayment();
  //   }

  // }, [clientSecret]); 
  


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
      <Elements options={options} stripe={stripePromise} key={clientSecret}>
        <NavRounded />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/request-product" element={<RequestProduct />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/designprocess" element={<DesignProcess />} />
          <Route path="/additional-services" element={<AdditionalServices />} />
          <Route path="/shop" element={<Purchase cart={cart} setCart={setCart} /> } />
          <Route path="/cart" element={<Cart cartApp={cart} setCartApp={setCart}/>} />
          <Route path="/checkout" element={<Checkout clientSecret={clientSecret} />} />
          <Route path="/complete-checkout" element={<CompleteCheckout />} />
          <Route path="/fail" element={<FailPage />} />
        </Routes>
        <Footer />
      </Elements>
    </>
  );
}

export default App;
