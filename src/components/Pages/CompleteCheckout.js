import Tick from "../../assets/svg/check-circle.svg";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CompleteCheckout() {
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center text-center"
      style={{ minHeight: "70vh" }}
    >
      <img alt="" src={Tick} style={{ width: "56px", height: "56px" }} />
      <h1 className="fw-bold mt-4">Thank you for your order.</h1>
      <p className="text-muted mt-2" style={{ maxWidth: "26rem" }}>
        Your purchase was completed successfully. We'll be in touch with
        shipping details shortly.
      </p>
      <Link to="/shop" className="text-decoration-none">
        <Button
          variant="outline-secondary"
          className="btn-rounded wide mt-3"
          onClick={() => window.scrollTo(0, 0)}
        >
          Continue shopping
        </Button>
      </Link>
    </Container>
  );
}

export default CompleteCheckout;
