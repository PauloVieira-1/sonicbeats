import { Container, Row, Col } from "react-bootstrap";
import CartElement from "../CartElement/CartElement";
import { useRef, useEffect, useState, useCallback } from "react";
import { ProductsAvailable } from "../Shop/ProductsAvailable";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import cartImg from "../../assets/svg/cart4.svg";



function Cart({cartApp, setCartApp}) {
  const cartRef = useRef(null);

  const [total, setTotal] = useState(0);
  const [cartEmpty, setCartEmpty] = useState(true);

  const totalAmount = useCallback(
    (cart) =>
      cart.reduce(
        (sum, item) => sum + item.count * ProductsAvailable[item.name].price,
        0
      ),
    []
  );  

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartApp));
    setTotal(totalAmount(cartApp));

    if (cartApp.length > 0) {
      setCartEmpty(false);
    }
  }, [cartApp, totalAmount]);

  const handleIncrement = (item) => {
    setTotal((prevtotal) => prevtotal + ProductsAvailable[item].price);
    const existingItem = cartApp.find((i) => i.name === item);
    if (existingItem) {
      const updatedCart = cartApp.map((i) => {
        if (i.name === item) {
          return { ...i, count: i.count + 1 };
        }
        return i;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartApp(updatedCart);
    }
  };
  const handleDecrement = (item) => {
    setTotal((prevtotal) => prevtotal - ProductsAvailable[item].price);
    const existingItem = cartApp.find((i) => i.name === item);
    if (existingItem && existingItem.count > 1) {
      const updatedCart = cartApp.map((i) => {
        if (i.name === item) {
          return { ...i, count: i.count - 1 };
        }
        return i;
      });
      
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartApp(updatedCart);
    } 
  };

  const HandleRemoveItem = (title) => {
    const filtered = cartApp.filter((item) => item.name !== title);

    localStorage.setItem("cart", JSON.stringify(filtered));
    setCartApp(filtered);
  };


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
          {cartApp.map((item, index) => (
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
              {totalAmount(cartApp) > 0 && (
                <Link to="/checkout">
                  <Button className="btn-rounded">
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
