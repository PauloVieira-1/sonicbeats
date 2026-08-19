import { Container, Row, Col } from "react-bootstrap";
import ProductItem from "../Shop/ProductItem";
import Reveal from "../Reveal/Reveal";
import Simplistic from "../../assets/jpeg/simplisticbg.jpeg";
import { ProductsAvailable } from "../../components/Shop/ProductsAvailable";
import { CURRENT_SLOT, BUILD_STAGES } from "../../config/queue";

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
              Every pair is built by hand once you reserve a slot. Custom
              requests are welcome too.
            </p>
          </Col>
        </Row>
      </Reveal>

      <Reveal>
        <div className="sb-queue-band rounded-4 p-4 p-md-5 mb-5">
          <Row className="g-4 align-items-start">
            <Col xs={12} lg={4}>
              <span className="sb-eyebrow">The workshop queue</span>
              <h4 className="fw-bold mb-2">Now building for {CURRENT_SLOT}</h4>
              <p className="text-muted mb-3">
                Nothing here sits on a shelf. Reserving a build slot puts your
                pair in the queue, and it is made in the order slots are taken.
              </p>
            </Col>
            <Col xs={12} lg={8}>
              <ol className="sb-queue-stages list-unstyled mb-0">
                {BUILD_STAGES.map((stage, index) => (
                  <li key={stage.title}>
                    <span className="sb-queue-step">{index + 1}</span>
                    <div>
                      <h6 className="fw-bold mb-1">{stage.title}</h6>
                      <p className="text-muted small mb-0">
                        {stage.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Col>
          </Row>
        </div>
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
