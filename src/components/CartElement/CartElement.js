import { Container, Row, Col } from "react-bootstrap";
import "./CartElement.css";

function CartElement(props) {
  return (
    <Container className="sb-cart-item rounded-4 p-3 mb-3 position-relative">
      <button
        type="button"
        aria-label={`Remove ${props.title}`}
        title="Remove"
        className="sb-cart-remove-btn"
        onClick={() => props.removeItem(props.title)}
      >
        ×
      </button>
      <Row className="align-items-center g-3">
        <Col xs={12} md={3}>
          <img
            alt={props.title}
            src={props.image}
            className="sb-cart-thumb rounded-3"
          />
        </Col>
        <Col xs={12} md={4}>
          <h6 className="fw-bold mb-1">{props.title}</h6>
          <p className="text-muted small mb-0">{props.description}</p>
        </Col>
        <Col xs={6} md={3}>
          <div className="sb-qty-stepper">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => props.totalDecrement(props.title)}
            >
              −
            </button>
            <span>{props.quantity}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => props.totalIncrement(props.title)}
            >
              +
            </button>
          </div>
        </Col>
        <Col xs={6} md={2} className="text-end">
          <span className="fw-bold">
            € {(props.price * props.quantity).toFixed(2)}
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default CartElement;
