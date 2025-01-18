import { Container, Row, Col } from "react-bootstrap";
import Timeline from "../Timeline/Timeline";

function DesignProcess() {
  return (
    <>
      <Container className="my-3" sm={12} lg={6}>
        <Row>
          <Col className="text-center p-5 my-5">
            <h1 className="fw-bold display-3">
              Welcome to the Sonicraft Design Process
            </h1>
            <h3 className="fw-lighter mt-3">
              Explore Our Craftsmanship and Innovation in Every Detail
            </h3>
          </Col>
        </Row>
      </Container>

      <Timeline />
    </>
  );
}

export default DesignProcess;
