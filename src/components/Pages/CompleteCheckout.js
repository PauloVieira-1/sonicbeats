import Tick from "../../assets/svg/check-circle.svg";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CURRENT_SLOT, BUILD_STAGES } from "../../config/queue";

function CompleteCheckout() {
  return (
    <Container className="my-5 py-5" style={{ maxWidth: "40rem" }}>
      <div className="text-center">
        <img alt="" src={Tick} style={{ width: "56px", height: "56px" }} />
        <h1 className="fw-bold mt-4">Your build slot is reserved.</h1>
        <p className="text-muted mt-2">
          Your pair has entered the workshop queue — we are currently building
          for {CURRENT_SLOT}. We will be in touch by email to confirm your
          place.
        </p>
      </div>

      <div className="sb-queue-band rounded-4 p-4 p-md-5 mt-5">
        <span className="sb-eyebrow">What happens next</span>
        <ol className="sb-queue-stages list-unstyled mb-0 mt-2">
          {BUILD_STAGES.map((stage, index) => (
            <li key={stage.title}>
              <span className="sb-queue-step">{index + 1}</span>
              <div>
                <h6 className="fw-bold mb-1">{stage.title}</h6>
                <p className="text-muted small mb-0">{stage.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-muted small mb-0 mt-4">
          You will hear from us at each stage. If anything in the build shifts
          the timing, we will let you know rather than leave you guessing.
        </p>
      </div>

      <div className="text-center">
        <Link to="/shop" className="text-decoration-none">
          <Button
            variant="outline-secondary"
            className="btn-rounded wide mt-4"
            onClick={() => window.scrollTo(0, 0)}
          >
            Back to the shop
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default CompleteCheckout;
