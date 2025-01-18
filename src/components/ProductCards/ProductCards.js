import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TabButton from "../ProductCards/TabButton";

import "./ProductCards.css";
import { ProductExamples } from "./ProductExampls";

function ProductCards() {
  const [product, setProduct] = useState("Product1");
  function handleSelect(product) {
    setProduct(product);
  }

  return (
    <Container className="mt-5 bg-light px-4 pt-4 rounded-5 shadow mb-5">
      <Row>
        <Col xs={12} md={12}>
          <h2>Our Speaker Selection</h2>
          <p>
            Explore our collection of past speaker models. Each product is
            unique, offering distinctive features and quality sound. These
            models showcase some of our existing models, however, you can place
            orders for customized, individual speakers tailored to your specific
            needs.
          </p>
        </Col>
        <Col xs={6} md={4}></Col>
      </Row>
      <Row className="mt-3">
        <Col xs={6} md={3} className="mt-3">
          <TabButton
            isActive={product === "Product1"}
            onSelect={() => handleSelect("Product1")}
          >
            {ProductExamples["Product1"].name}
          </TabButton>
        </Col>
        <Col xs={6} md={3} className="mt-3">
          <TabButton
            isActive={product === "Product2"}
            onSelect={() => handleSelect("Product2")}
          >
            {ProductExamples["Product2"].name}
          </TabButton>
        </Col>
        <Col xs={6} md={3} className="mt-3">
          <TabButton
            isActive={product === "Product3"}
            onSelect={() => handleSelect("Product3")}
          >
            {ProductExamples["Product3"].name}
          </TabButton>
        </Col>
        <Col xs={6} md={3} className="mt-3">
          <TabButton
            isActive={product === "Product4"}
            onSelect={() => handleSelect("Product4")}
          >
            {ProductExamples["Product4"].name}
          </TabButton>
        </Col>
      </Row>
      <Row>
        <div className="mt-4 mb-5">
          <Container>
            <Row className="rounded-3 bg-white border">
              <Col className="p-0" sm={12} lg={6}>
                <img
                  src={ProductExamples[product].image}
                  alt={ProductExamples[product].title}
                  className="img-fluid rounded-3 h-100"
                  style={{
                    maxHeight: "430px",
                    minWidth: "100%",
                    objectFit: "cover",
                    minHeight: "430px",
                  }}
                />
              </Col>
              <Col className="px-5 py-4" sm={12} lg={6}>
                <h3 className="mb-3">{ProductExamples[product].title}</h3>
                <p>{ProductExamples[product].description}</p>
                <ul className="fw-lighter ml-0">
                  {Object.keys(ProductExamples[product].specifications).map(
                    (key) => (
                      <li key={key} className="text-start bullets">
                        {key.split("_").join(" ")}:{" "}
                        {ProductExamples[product].specifications[key]}
                      </li>
                    ),
                  )}
                  {Object.keys(ProductExamples[product].aditionalInfo).map(
                    (key) => (
                      <li className="text-start bullets" key={key}>
                        {ProductExamples[product].aditionalInfo[key]}
                      </li>
                    ),
                  )}
                </ul>
              </Col>
            </Row>
          </Container>
          {/*<Card>
            <Card.Img variant="top" src={ProductExamples[product].image}/>
            <Card.Body>
              <Card.Title>{ProductExamples[product].title}</Card.Title>
              <Card.Text>
                {ProductExamples[product].description}
              </Card.Text>
            </Card.Body>
          </Card>*/}
        </div>
      </Row>
    </Container>
  );
}

export default ProductCards;
