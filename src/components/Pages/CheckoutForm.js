import { PaymentElement } from "@stripe/react-stripe-js";
import { Container, Form } from "react-bootstrap";
import { useState } from "react";
import {
  useStripe,
  useElements,
  LinkAuthenticationElement,
  AddressElement,
} from "@stripe/react-stripe-js";
import {
  ACKNOWLEDGEMENT,
  BUILD_WINDOW,
  CURRENT_SLOT,
  recordAcknowledgement,
} from "../../config/queue";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [accepted, setAccepted] = useState(false);

  const handleAccept = (event) => {
    const checked = event.target.checked;
    setAccepted(checked);
    if (checked) {
      recordAcknowledgement();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !accepted) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
      confirmParams: {
        return_url: "https://complete-checkout.onrender.com",
      },
    });

    if (
      error &&
      (error.type === "card_error" || error.type === "validation_error")
    ) {
      console.log("Error:", error.message);
    }
  };

  return (
    <Container className="mb-5 mt-5 pt-5" style={{ maxWidth: "640px" }}>
      <form onSubmit={handleSubmit}>
        <span className="sb-eyebrow">Secure checkout</span>
        <h1 className="display-6 fw-bold mb-2">Reserve your build slot</h1>
        <p className="text-muted">
          The workshop is currently building for {CURRENT_SLOT}. Your pair
          enters the queue as soon as this payment completes.
        </p>
        <h5 className="my-4 fw-bold">Contact info</h5>
        <LinkAuthenticationElement
          options={{
            defaultValues: {
              email: "",
            },
          }}
        />
        <h5 className="my-4 fw-bold">Delivery</h5>
        <AddressElement
          options={{ mode: "shipping", allowedCountries: ["NL"] }}
        />
        <h5 className="my-4 fw-bold">Payment</h5>

        <PaymentElement />

        <div className="sb-ack mt-4">
          <Form.Check
            type="checkbox"
            id="made-to-order-ack"
            checked={accepted}
            onChange={handleAccept}
            label={ACKNOWLEDGEMENT.text}
          />
        </div>

        <button
          className="my-4 btn btn-primary btn-rounded w-100 py-2 fw-bold"
          disabled={!accepted}
        >
          Reserve my build slot
        </button>
        <p className="text-muted small text-center">
          Estimated delivery window: {BUILD_WINDOW}. You will receive an update
          at every stage of the build.
        </p>
      </form>
    </Container>
  );
};

export default CheckoutForm;
