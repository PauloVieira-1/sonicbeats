import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Product.css";
import { useState, useRef, useEffect } from "react";

function ProductItem(props) {
  const [success, setSuccess] = useState(false);
  const [mainImage, setMainImage] = useState(props.image);
  const revertTimer = useRef(null);

  useEffect(() => () => clearTimeout(revertTimer.current), []);

  const handleAddToCart = () => {
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

        <div className="d-flex justify-content-between align-items-center mt-auto pt-4">
          <span className="fw-bold fs-4">€ {props.price.toFixed(2)}</span>
          <Button
            variant="primary"
            className="btn-rounded px-4"
            onClick={handleAddToCart}
          >
            {success ? "Added ✓" : "Add to cart"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
