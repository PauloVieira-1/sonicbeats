import { Container, Row, Col } from "react-bootstrap";
import Timeline from "../Timeline/Timeline";

function DesignProcess() {
  return (
    <>
      <Container className="my-3">
        <Row>
          <Col className="text-center p-5 my-5">
            <span className="sb-eyebrow">The process</span>
            <h1 className="fw-bold display-3">From concept to concert.</h1>
            <h3 className="fw-lighter mt-3">
              Explore our craftsmanship and innovation in every detail
            </h3>
          </Col>
        </Row>
      </Container>

      <Timeline />
    </>
  );
}

export default DesignProcess;
