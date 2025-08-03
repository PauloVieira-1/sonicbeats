import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "./Product.css";
import { useState } from "react";

function ProductItem(props) {
  
  const [success, setSuccess] = useState(false);
  const [mainImage, setMainImage] = useState(props.image); // Track displayed image

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
  };

  return (
    <Card className="mx-3 my-3 img-effect" style={{ width: "25rem" }}>
      {/* Main Image */}
      <Card.Img
        variant="top"
        src={mainImage || ""}
        className="img-fluid"
        style={{
          height: "100%",
          minWidth: "100%",
          maxHeight: "300px",
          objectFit: "cover",
        }}
      />

      {/* Thumbnails */}
      <div className="d-flex justify-content-center gap-2 my-2">
        {[props.image, props.image2, props.image3, props.treble]
          .filter(Boolean) // remove undefined
          .map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumb-${index}`}
              onClick={() => setMainImage(img)}
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                cursor: "pointer",
                border: mainImage === img ? "2px solid #007bff" : "2px solid transparent",
                borderRadius: "5px"
              }}
            />
          ))}
      </div>

      <Card.Body className="p-4">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>

        <ListGroup className="list-group-flush my-4">
          {props.specifications.map((spec, index) => (
            <ListGroup.Item key={index} className="border-0">- {spec}</ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Text className="fw-bold fs-5">
          ${props.price.toFixed(2)}
        </Card.Text>
        <Button
          variant={`${success ? "success" : "primary"}`}
          className="rounded-5 px-4"
          onClick={handleAddToCart}
        >
          {success ? "Added Successfully" : "Add to Cart"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
