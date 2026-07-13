import { Container, Row, Col } from "react-bootstrap";

function InfoSection(props) {
  return (
    <div className="p-1">
      <Container
        className={`my-4 bg-custom-color-grey-2 rounded-4 overflow-hidden ${
          props.shadow ? "shadow" : ""
        }`}
      >
        <Row className="align-items-stretch">
          <Col lg={props.image ? 7 : 12} className="p-4 p-lg-5">
            <span className="sb-eyebrow">{props.title}</span>
            <h3 className="fw-bold mb-3">{props.heading}</h3>
            <p className="text-muted mb-0" style={{ maxWidth: "44rem" }}>
              {props.content}
            </p>
          </Col>
          {props.image && (
            <Col lg={5} className="p-0">
              <img
                className="w-100 h-100"
                style={{
                  objectFit: "cover",
                  minHeight: "300px",
                  maxHeight: "480px",
                }}
                src={props.image}
                alt=""
              />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default InfoSection;
