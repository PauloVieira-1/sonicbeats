import { Container, Row, Col } from "react-bootstrap";
import CartElement from "../CartElement/CartElement";
import { useEffect, useState, useCallback } from "react";
import { ProductsAvailable } from "../Shop/ProductsAvailable";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import cartImg from "../../assets/svg/cart4.svg";
import { leadTimeFor, CURRENT_SLOT } from "../../config/queue";

function Cart({ cartApp, setCartApp }) {
  const [total, setTotal] = useState(0);

  const totalAmount = useCallback(
    (cart) =>
      cart.reduce(
        (sum, item) => sum + item.count * ProductsAvailable[item.name].price,
        0,
      ),
    [],
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartApp));
    setTotal(totalAmount(cartApp));
  }, [cartApp, totalAmount]);

  const changeQuantity = (name, delta) => {
    setCartApp(
      cartApp.map((item) =>
        item.name === name
          ? { ...item, count: Math.max(1, item.count + delta) }
          : item,
      ),
    );
  };

  const handleIncrement = (name) => changeQuantity(name, 1);
  const handleDecrement = (name) => changeQuantity(name, -1);

  const handleRemoveItem = (name) => {
    setCartApp(cartApp.filter((item) => item.name !== name));
  };

  const cartEmpty = cartApp.length === 0;

  return (
    <Container className="mb-5 mt-5 pt-5" style={{ minHeight: "55vh" }}>
      <Row className="pt-4 pb-3">
        <Col>
          <span className="sb-eyebrow">Your order</span>
          <h1 className="display-5 fw-bold">Your build slots</h1>
        </Col>
      </Row>
      <Row className="gy-4">
        <Col xs={12} lg={8}>
          {cartEmpty && (
            <div className="text-center py-5">
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle bg-custom-color-grey-2"
                style={{ width: "88px", height: "88px" }}
              >
                <img
                  src={cartImg}
                  alt=""
                  style={{ width: "36px", height: "36px", opacity: 0.55 }}
                />
              </div>
              <h5 className="fw-bold mt-4">No build slots reserved</h5>
              <p className="text-muted">
                Discover our handcrafted speakers and find your sound.
              </p>
              <Link to="/shop" className="text-decoration-none">
                <Button
                  variant="outline-secondary"
                  className="btn-rounded wide mt-2"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Browse the shop
                </Button>
              </Link>
            </div>
          )}
          {cartApp.map((item) => (
            <CartElement
              key={item.name}
              image={ProductsAvailable[item.name].image}
              title={ProductsAvailable[item.name].title}
              description={ProductsAvailable[item.name].description}
              price={ProductsAvailable[item.name].price}
              leadTime={leadTimeFor(item.name)}
              quantity={item.count}
              removeItem={handleRemoveItem}
              totalIncrement={handleIncrement}
              totalDecrement={handleDecrement}
            />
          ))}
        </Col>
        <Col xs={12} lg={4}>
          <Card className="sb-totals text-white rounded-4 border-0 p-4">
            <h5 className="fw-bold mb-4">Reservation summary</h5>
            <div className="d-flex justify-content-between sb-text-dim mb-2">
              <span>Subtotal</span>
              <span>€ {total.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between sb-text-dim mb-3">
              <span>Crating &amp; delivery</span>
              <span>{cartEmpty ? "—" : "Free"}</span>
            </div>
            <hr className="border-secondary opacity-25 my-2" />
            <div className="d-flex justify-content-between fw-bold fs-5 mt-2 mb-4">
              <span>Total</span>
              <span>€ {total.toFixed(2)}</span>
            </div>
            {!cartEmpty && (
              <>
                <Link to="/checkout" className="text-decoration-none d-grid">
                  <Button variant="light" className="btn-rounded py-2 fw-bold">
                    Reserve your build slot
                  </Button>
                </Link>
                <p className="sb-text-dim small mb-0 mt-3">
                  Made to order — the workshop is currently building for{" "}
                  {CURRENT_SLOT}. Your slot is confirmed once payment completes.
                </p>
              </>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
