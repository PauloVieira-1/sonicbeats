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

    if (error.type === "card_error" || error.type === "validation_error") {
      console.log("Error:", error.message);
    }
  };

  return (
    <Container className="my-5">
      <form onSubmit={handleSubmit}>
        <h3 className="my-4">Contact info</h3>
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
        <h3 className="my-4">Shipping</h3>
        <AddressElement
          options={{ mode: "shipping", allowedCountries: ["NL"] }}
        />
        <h3 className="my-4">Payment</h3>

        <PaymentElement />
        <button className="my-4 btn btn-primary rounded-5 px-4">Submit</button>
      </form>
    </Container>
  );
};

export default CheckoutForm;
