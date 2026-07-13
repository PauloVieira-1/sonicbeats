import { PaymentElement } from "@stripe/react-stripe-js";
import { Container } from "react-bootstrap";
import {
  useStripe,
  useElements,
  LinkAuthenticationElement,
  AddressElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
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
        <h1 className="display-6 fw-bold mb-4">Complete your order</h1>
        <h5 className="my-4 fw-bold">Contact info</h5>
        <LinkAuthenticationElement
          // onChange={(event) => {
          //   setEmail(event.value.email);
          // }}
          options={{
            defaultValues: {
              email: "",
            },
          }}
        />
        <h5 className="my-4 fw-bold">Shipping</h5>
        <AddressElement
          options={{ mode: "shipping", allowedCountries: ["NL"] }}
        />
        <h5 className="my-4 fw-bold">Payment</h5>

        <PaymentElement />
        <button className="my-4 btn btn-primary btn-rounded w-100 py-2 fw-bold">
          Pay now
        </button>
      </form>
    </Container>
  );
};

export default CheckoutForm;
