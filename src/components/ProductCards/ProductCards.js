import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TabButton from "../ProductCards/TabButton";

import "./ProductCards.css";
import { ProductExamples } from "./ProductExampls";

function ProductCards() {
  const [product, setProduct] = useState("Product1");
  const selected = ProductExamples[product];

  return (
    <Container className="mt-5 bg-custom-color-grey-2 px-4 px-md-5 pt-5 pb-4 rounded-4 mb-5">
      <Row>
        <Col xs={12} lg={8}>
          <span className="sb-eyebrow">The collection</span>
          <h2 className="display-6 fw-bold">Our speaker selection</h2>
          <p className="text-muted mt-2">
            Browse our handcrafted speaker range and explore the details that
            make each model unique. Every design can be tailored to suit your
            space, style, and sound preferences.
          </p>
        </Col>
      </Row>
      <Row className="mt-2">
        {Object.keys(ProductExamples).map((key) => (
          <Col xs={6} md={3} className="mt-3" key={key}>
            <TabButton
              isActive={product === key}
              onSelect={() => setProduct(key)}
            >
              {ProductExamples[key].name}
            </TabButton>
          </Col>
        ))}
      </Row>
      <Row>
        <div className="mt-4 mb-4">
          <Row
            key={product}
            className="sb-fade-in rounded-4 bg-white overflow-hidden"
          >
            <Col className="p-0" sm={12} lg={6}>
              <img
                src={selected.image}
                alt={selected.title}
                className="img-fluid h-100 w-100"
                style={{
                  maxHeight: "480px",
                  minHeight: "430px",
                  objectFit: "cover",
                }}
              />
            </Col>
            <Col className="px-4 px-lg-5 py-4 py-lg-5" sm={12} lg={6}>
              <h3 className="fw-bold mb-3">{selected.title}</h3>
              <p className="text-muted">{selected.description}</p>
              <div className="mt-4">
                {Object.keys(selected.specifications).map((key) => (
                  <div className="sb-spec-row" key={key}>
                    <span className="sb-spec-label">
                      {key.split("_").join(" ")}
                    </span>
                    <span className="sb-spec-value">
                      {selected.specifications[key]}
                    </span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </Row>
    </Container>
  );
}

export default ProductCards;
