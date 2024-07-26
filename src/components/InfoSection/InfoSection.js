import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { forwardRef } from "react";
import PlusImage from "../../assets/svg/plus-circle.svg";
import "../ImageCarousel/ImageCarousel.css";

const InfoSection = forwardRef(function InfoSection(props, ref) {
  let additionalButton = null;

  if (props.button) {
    additionalButton = (
      <Button
        className={`d-flex align-items-center btn-rounded d-none d-lg-block position-absolute bottom-0 start-10 ${props.active ? "active shadow-transition" : ""}`}
        style={{
          marginTop: "15px",
          paddingLeft: "8px",
          paddingRight: "8px",
          paddingRight: "15px",
        }}
        variant="outline-secondary"
        ref={ref}
        onClick={props.onSelect}
      >
        {" "}
        <span className="recolor-image-h">
          <img
            src={PlusImage}
            alt="plus"
            style={{
              marginRight: "6px",
              marginLeft: "5px",
              verticalAlign: "middle",
              position: "relative",
              top: "-1px",
              opacity: "0.6",
            }}
            className={props.active ? "recolor-image" : ""}
          />
        </span>
        Discover Team
      </Button>
    );
  }

  return (
    <div className="p-1">
      <Container
        style={{ minHeight: "400px" }}
        className={`my-4 bg-light rounded-4 ${props.shadow ? "shadow" : ""}`}
      >
        <Row>
          <Col className="p-5">
            <h3 className="fw-medium fs-1 mb-">{props.title}</h3>
            <h5 className="fw-lighter mt-3">{props.heading}</h5>
            <p>{props.content}</p>
            <div className="flex">{additionalButton}</div>
          </Col>
          {additionalContent(props)}
        </Row>
      </Container>
    </div>
  );
});

export default InfoSection;

function additionalContent(props) {
    if (props.image) {
    return (
      <Col md={4} className="p-4 text-center .d-sm-none .d-md-block">
        <img
          className="img-fluid rounded-3 border"
          style={{ height: "400px" }}
          src={props.image}
          alt="image"
        />
      </Col>
    );
  }
}