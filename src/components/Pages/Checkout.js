import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Container, Spinner } from "react-bootstrap";

const stripePromise = loadStripe(
  "pk_test_51QsRhPFb6wjMdquvTpSk3zcc0QmBsfpgFj93vYigON7NbdTQiGxNFVXRGpDMocPA6nHE4dayUS3Nrgly5a9g55u4005hIKHfTg"
);

const Checkout = ({ cart }) => {
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    if (!cart || cart.length === 0) return;

    fetch("https://create-payment-intent.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      })
      .catch((err) => console.error("Payment intent fetch error:", err));
  }, [cart]);

  const options = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  if (!clientSecret) {
    return (
      <Container
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ minHeight: "70vh" }}
      >
        <Spinner
          animation="border"
          role="status"
          style={{ color: "var(--sb-ink)" }}
        />
        <p className="text-muted mt-3 mb-0">Preparing secure checkout…</p>
      </Container>
    );
  }

  return (
    <Elements stripe={stripePromise} options={options} key={clientSecret}>
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;
