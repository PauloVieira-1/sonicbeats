import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "./Product.css";

import { useState } from "react";

function ProductItem(props) {
 
  const [success, setSuccess] = useState(false);
  // const [cartshop, setCartShop] = useState(props.cart || []);

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
      <Card.Img
        variant="top"
        src={props.image || ""}  
        className="img-fluid"
        style={{
          height: "100%",
          minWidth: "100%",
          maxHeight: "300px",
          objectFit: "cover",
        }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <ListGroup className="list-group-flush my-4">
          <ListGroup.Item>{props.spec1}</ListGroup.Item>
          <ListGroup.Item>{props.spec2}</ListGroup.Item>
          <ListGroup.Item>{props.spec3}</ListGroup.Item>
          <ListGroup.Item>€ {props.price}</ListGroup.Item>
        </ListGroup>
        <Button
          variant={`${success ? "success" : "primary"}`}
          className="rounded-5 px-4"
          onClick={() => {
            handleAddToCart();
            console.log(localStorage.getItem("cart"));
          }}
        >
          {success ? "Added Sucessfully" : "Add to Cart"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
