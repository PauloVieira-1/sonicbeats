import { Container, Row, Col } from "react-bootstrap";
import ProductItem from "../Shop/ProductItem";
import Reveal from "../Reveal/Reveal";
import Simplistic from "../../assets/jpeg/simplisticbg.jpeg";
import { ProductsAvailable } from "../../components/Shop/ProductsAvailable";

function Purchase({ cart, setCart }) {
  return (
    <Container className="mb-5 mt-5 pt-5" style={{ minHeight: "50vh" }}>
      <Reveal>
        <Row className="g-0 rounded-4 overflow-hidden align-items-stretch mt-4 mb-4">
          <Col xs={12} md={5}>
            <img
              src={Simplistic}
              alt="SonicBeats speaker in a minimal interior"
              className="w-100 h-100"
              style={{
                objectFit: "cover",
                minHeight: "320px",
                maxHeight: "72vh",
              }}
            />
          </Col>
          <Col
            md={7}
            className="bg-custom-color-grey p-5 d-flex flex-column justify-content-center"
          >
            <span className="sb-eyebrow">The shop</span>
            <h1 className="display-3 fw-bold">Shop</h1>
            <h4 className="fw-light mt-2">
              Browse our shop to find the perfect speaker for you
            </h4>
            <p className="text-muted mt-2" style={{ maxWidth: "34rem" }}>
              Although you are able to send us custom requests, we have a
              large inventory of speakers to choose from.
            </p>
          </Col>
        </Row>
      </Reveal>
      <Row className="g-4 justify-content-center">
        {Object.keys(ProductsAvailable).map((key, index) => {
          return (
            <Col
              key={key}
              xs={12}
              sm={6}
              xl={3}
              className="d-flex justify-content-center align-items-stretch"
            >
              <Reveal
                delay={index * 0.08}
                className="d-flex justify-content-center w-100"
              >
                <ProductItem
                  title={ProductsAvailable[key].title}
                  price={ProductsAvailable[key].price}
                  image={ProductsAvailable[key].image}
                  image2={ProductsAvailable[key].image2}
                  image3={ProductsAvailable[key].image3}
                  image4={ProductsAvailable[key]?.image4}
                  image5={ProductsAvailable[key]?.image5}
                  image6={ProductsAvailable[key]?.image6}
                  image7={ProductsAvailable[key]?.image7}
                  description={ProductsAvailable[key].description}
                  specifications={ProductsAvailable[key].specifications}
                  treble={ProductsAvailable[key].treble}
                  cart={cart}
                  setCart={setCart}
                />
              </Reveal>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Purchase;
