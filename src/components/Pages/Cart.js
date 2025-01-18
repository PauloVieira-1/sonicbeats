import { Container, Row, Col } from "react-bootstrap";
import CartElement from "../CartElement/CartElement";
import { useRef, useEffect, useState } from "react";
import { ProductsAvailable } from "../Shop/ProductsAvailable";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import cartImg from "../../assets/svg/cart4.svg";

function Cart() {
  const cartRef = useRef(null);

  const [total, setTotal] = useState(0);
  const getCart = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  };

  const [cart, setCart] = useState(getCart());
  const [cartEmpty, setCartEmpty] = useState(true);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setTotal(totalAmount(cart));

    if (cart.length > 0) {
      setCartEmpty(false);
    }
  }, [cart]);

  const handleIncrement = (item) => {
    setTotal(total + ProductsAvailable[item].price);
  };
  const handleDecrement = (item) => {
    setTotal(total - ProductsAvailable[item].price);
  };

  const HandleRemoveItem = (title) => {
    const filtered = cart.filter((item) => item.name !== title);

    localStorage.setItem("cart", JSON.stringify(filtered));
    // setTotal(total - ProductsAvailable[title].price * cart.find((item) => item.title = title).count);
    setCart(filtered);
  };

  function totalAmount(cart) {
    return cart.reduce(
      (sum, item) => sum + item.count * ProductsAvailable[item.name].price,
      0,
    );
  }

  function clickHandler() {
    localStorage.setItem("cart", JSON.stringify([]));
    setCart([]);
  }

  return (
    <Container className="my-5">
      <Row>
        <div className="pb-3">
          <h2>Shopping Cart</h2>
          <hr></hr>
        </div>
        <Col xs={12} lg={7}>
          {cartEmpty && (
            <div className="text-center p-5 mb-4">
              <p className="fw-bold fs-5 mx-1 text-center mt-1 mb-2">
                Your Cart is Empty
              </p>
              <img
                src={cartImg}
                className="img-fluid"
                alt=""
                style={{ height: "70px", width: "70px" }}
              ></img>
            </div>
          )}
          {cart.map((item, index) => (
            <CartElement
              key={index}
              image={ProductsAvailable[item.name].image}
              title={ProductsAvailable[item.name].title}
              description={ProductsAvailable[item.name].description}
              price={ProductsAvailable[item.name].price}
              quantity={item.count}
              removeItem={HandleRemoveItem}
              totalIncrement={handleIncrement}
              totalDecrement={handleDecrement}
              ref={cartRef}
            />
          ))}
        </Col>
        <Col>
          <Card className="bg-dark text-white px-5 py-3 rounded-4">
            <h1 className="fw-bold mt-3 mb-2 mx-3">Total</h1>
            <h4 className="fw-light mx-3 mt-1 mb-3">€ {total}</h4>
            <div className="mx-1 my-4">
              {totalAmount(cart) > 0 && (
                <Link to="/checkout">
                  <Button className="btn-rounded" onClick={clickHandler}>
                    Checkout
                  </Button>
                </Link>
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
