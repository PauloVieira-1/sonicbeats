import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

import Logo from "../../assets/jpeg/Logo2.jpeg";
import Facebook from "../../assets/svg/facebook.svg";
import Instagram from "../../assets/svg/instagram.svg";
import Twitter from "../../assets/svg/twitter-x.svg";
function Footer() {
  return (
    <div className="bg-light">
      <Container className="mt-4">
        <Row className="p-3">
          <Col className="d-flex justify-content-center">
            <Button
              className="btn-rounded wide"
              variant="outline-primary"
              onClick={() => window.scrollTo(0, 0)}
            >
              Back to Top
            </Button>
          </Col>
        </Row>
        <div className="footer">
          <Row className="p-3">
            <Col className="text-center">
              <img
                alt=""
                src={Logo}
                width="160"
                height="33"
                className="d-inline-block align-top"
              />{" "}
            </Col>
          </Row>
          <Row className="text-center">
            <Col className="d-flex justify-content-center m-3">
              <img
                src={Instagram}
                width="25"
                height="25"
                className="mx-3"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/sonicbeat.s",
                    "_blank",
                  )
                }
                alt="instagram"
              ></img>
            </Col>
          </Row>
          <p className="text-center mt-3">
            © 2025 Sonicbeat. All rights reserved.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
