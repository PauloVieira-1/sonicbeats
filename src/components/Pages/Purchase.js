import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Simplistic from "../../assets/jpeg/simplisticbg.jpeg";
import ProductItem from "../Shop/ProductItem";
import { ProductsAvailable } from "../../components/Shop/ProductsAvailable";
function Purchase() {
  return (
    <Container
      className="my-5 mx-0 transition-fast"
      style={{ minHeight: "50vh", minWidth: "100vw" }}
    >
      <Row>
        <Col className="" md={5}>
          <img
            src={Simplistic}
            alt=""
            className="img-fluid"
            style={{ height: "100%", minWidth: "100%" }}
          ></img>
        </Col>
        <Col
          className="bg-custom-color-grey mx-0 p-5 d-flex  justify-content-center text-start flex-column "
          md={7}
        >
          <h1 className="display-3 ms-5 my-4 fw-light align-middle">Shop</h1>
          <h4 className="ms-5 my-3 fw-light">
            Browse our shop to find the perfect speaker for you
          </h4>
          <p className="ms-5 fw-light">
            Although you are able to send us custom requests, we have a large
            inventory of speakers to choose from.
          </p>
        </Col>
      </Row>
      <Row>
        {Object.keys(ProductsAvailable).map((key) => {
          return (
            <Col className="p-4 d-flex justify-content-center align-items-center">
              <ProductItem
                title={ProductsAvailable[key].title}
                price={ProductsAvailable[key].price}
                image={ProductsAvailable[key].image}
                description={ProductsAvailable[key].description}
                spec1={ProductsAvailable[key].spec1}
                spec2={ProductsAvailable[key].spec2}
                spec3={ProductsAvailable[key].spec3}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Purchase;
