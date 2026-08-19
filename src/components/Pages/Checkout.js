import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Container, Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { readAcknowledgement } from "../../config/queue";

const stripePromise = loadStripe(
  "pk_test_51QsRhPFb6wjMdquvTpSk3zcc0QmBsfpgFj93vYigON7NbdTQiGxNFVXRGpDMocPA6nHE4dayUS3Nrgly5a9g55u4005hIKHfTg",
);

const Checkout = ({ cart }) => {
  const [clientSecret, setClientSecret] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!cart || cart.length === 0) return;

    /* The made-to-order terms the customer accepted travel as headers rather
       than in the body: the payment service can record them without the
       request shape changing, so an older deployment keeps working. */
    const ack = readAcknowledgement();

    fetch("https://create-payment-intent.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(ack && {
          "X-SB-Acknowledgement": ack.version,
          "X-SB-Acknowledged-At": ack.at,
        }),
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          /* The payment service prices the cart itself and refuses anything it
             cannot price, so a rejection means the cart is stale or tampered
             with. Say so rather than spinning forever. */
          console.error("Payment intent rejected:", data && data.error);
          setFailed(true);
        }
      })
      .catch((err) => {
        console.error("Payment intent fetch error:", err);
        setFailed(true);
      });
  }, [cart]);

  const options = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  if (failed) {
    return (
      <Container
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ minHeight: "70vh", maxWidth: "32rem" }}
      >
        <h2 className="fw-bold">We could not open checkout.</h2>
        <p className="text-muted mt-2">
          Something in your reservation could not be priced. Please go back to
          your build slots and try again — if it keeps happening, email us at
          designed@sonicbeats.nl and we will reserve your slot by hand.
        </p>
        <Link to="/cart" className="text-decoration-none">
          <Button
            variant="outline-secondary"
            className="btn-rounded wide mt-2"
            onClick={() => window.scrollTo(0, 0)}
          >
            Back to your build slots
          </Button>
        </Link>
      </Container>
    );
  }

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
