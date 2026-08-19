import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Product.css";
import { useState, useRef, useEffect } from "react";
import ReserveModal from "../Reserve/ReserveModal";
import { leadTimeFor, recordAcknowledgement } from "../../config/queue";

/* The made-to-order terms are shown on the first reserve of a visit. Reserving
   a second speaker does not re-open the modal — the checkout checkbox is the
   confirmation that counts. */
const SEEN_KEY = "sb_ack_seen";

function ProductItem(props) {
  const [success, setSuccess] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [mainImage, setMainImage] = useState(props.image);
  const revertTimer = useRef(null);

  useEffect(() => () => clearTimeout(revertTimer.current), []);

  const addToCart = () => {
    const existingItem = props.cart?.find((item) => item.name === props.title);

    const updatedCart = existingItem
      ? props.cart.map((item) => {
          if (item.name === props.title) {
            return { ...item, count: item.count + 1, price: item.price };
          }
          return item;
        })
      : [...props.cart, { name: props.title, count: 1, price: props.price }];

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    props.setCart(updatedCart);
    setSuccess(true);
    clearTimeout(revertTimer.current);
    revertTimer.current = setTimeout(() => setSuccess(false), 1600);
  };

  const handleReserve = () => {
    if (sessionStorage.getItem(SEEN_KEY)) {
      addToCart();
      return;
    }
    setShowTerms(true);
  };

  const handleAcceptTerms = () => {
    recordAcknowledgement();
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* private mode — the modal simply shows again */
    }
    setShowTerms(false);
    addToCart();
  };

  const thumbnails = [
    props.image,
    props.image2,
    props.image3,
    props.image4,
    props.image5,
    props.image6,
    props.treble,
  ].filter((img) => img !== undefined && img !== null);

  return (
    <Card
      className="sb-product-card rounded-4 overflow-hidden img-effect h-100"
      style={{ width: "100%", maxWidth: "25rem" }}
    >
      <Card.Img
        variant="top"
        src={mainImage || ""}
        className="sb-product-hero"
        alt={props.title}
      />

      {/* Thumbnails */}
      <div className="d-flex gap-2 px-3 pt-3 flex-wrap">
        {thumbnails.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            onClick={() => setMainImage(img)}
            className={`sb-thumb ${mainImage === img ? "is-selected" : ""}`}
          />
        ))}
      </div>

      <Card.Body className="p-4 d-flex flex-column">
        <Card.Title as="h5" className="fw-bold">
          {props.title}
        </Card.Title>
        <Card.Text className="text-muted small mb-3">
          {props.description}
        </Card.Text>

        <ul className="sb-product-specs list-unstyled small text-muted mb-0">
          {props.specifications.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>

        <div className="sb-spec-row mt-3">
          <span className="sb-spec-label">Built to order in</span>
          <span className="sb-spec-value">{leadTimeFor(props.title)}</span>
        </div>

        {/* Price sits above a full-width button: side by side, both wrap
            awkwardly in the narrow four-up column. */}
        <div className="mt-auto pt-4">
          <div className="fw-bold fs-4 mb-3">€ {props.price.toFixed(2)}</div>
          <div className="d-grid">
            <Button
              variant="primary"
              className="btn-rounded py-2 text-nowrap"
              onClick={handleReserve}
            >
              {success ? "Reserved ✓" : "Reserve build slot"}
            </Button>
          </div>
        </div>
      </Card.Body>

      <ReserveModal
        show={showTerms}
        onHide={() => setShowTerms(false)}
        onConfirm={handleAcceptTerms}
        productName={props.title}
      />
    </Card>
  );
}

export default ProductItem;
