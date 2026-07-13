import { Container, Row, Col } from "react-bootstrap";
import RequestProductForm from "../RequestProductForm/RequestProductForm.js";
import Reveal from "../Reveal/Reveal";
import Hand from "../../assets/svg/hand.svg";
import "../RequestProductForm/Request.css";
import { useState } from "react";

function RequestProduct() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Container className="mb-5 mt-5 pt-5">
      <Row className="pt-4 text-center">
        <Col>
          <Reveal>
            <span className="sb-eyebrow">Custom builds</span>
            <h1 className="display-3 fw-bold">Design your own speaker.</h1>
          </Reveal>
        </Col>
      </Row>
      <Row className="align-items-start gy-4 mt-2">
        <Col lg={6} className="p-4">
          <Reveal>
            <Container
              className="main-container transition-fast"
              onClick={() => handleClick()}
            >
              <Row>
                <div
                  className={`card-custom bg-custom-color-grey-2 rounded-4 mt-2 m-2 ${isFlipped ? "flip" : ""}`}
                >
                  <div className="card-front p-5 mb-2">
                    <h2 className="fw-bold display-6 mb-4">
                      Help us design your speaker
                    </h2>
                    <h5 className="mt-2 fw-bold">Collaborate with our team</h5>
                    <p className="fw-lighter mt-3 mb-3">
                      Bring your vision to life with our expert guidance.
                      Customize every detail for a truly unique sound
                      experience.
                    </p>
                    <div className="text-center p-1">
                      <img
                        src={Hand}
                        className="img-fluid mx-auto d-block mt-5"
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                      />
                      <p className="fw-lighter mt-3">Click to flip</p>
                    </div>
                  </div>
                  <div className="card-back">
                    <Col className="p-5">
                      <h4 className="mb-3 fw-bold">
                        What we would like to know
                      </h4>
                      <h6 className="fw-bold mt-4">Speaker specifications</h6>
                      <ul className="fw-lighter py-2 m-2 bullets">
                        <li className="text-start bullets">
                          Speaker size: the size of the speaker you desire
                          (e.g., small, medium, large).
                        </li>
                        <li className="text-start bullets">
                          Preferred wood finish: the finish you prefer (e.g.,
                          oak).
                        </li>
                        <li className="text-start bullets">
                          Additional features: any extras you want (e.g., extra
                          bass, waterproofing).
                        </li>
                      </ul>
                      <h6 className="fw-bold mt-4">Design specifications</h6>
                      <ul className="text-start fw-lighter">
                        <li className="text-start bullets">
                          Color preferences: your preferred color(s) for the
                          speaker.
                        </li>
                        <li className="text-start bullets">
                          Engraving: any text you would like engraved (e.g., a
                          name or quote).
                        </li>
                      </ul>
                      <h6 className="fw-light mt-5">
                        * We cannot guarantee all requests can be met
                      </h6>
                    </Col>
                  </div>
                </div>
              </Row>
            </Container>
          </Reveal>
        </Col>
        <Col lg={6} className="p-4">
          <Reveal delay={0.12}>
            <div className="bg-white border rounded-4 p-4 p-lg-5">
              <h4 className="fw-bold mb-4">Request a quote</h4>
              <RequestProductForm />
            </div>
          </Reveal>
        </Col>
      </Row>
    </Container>
  );
}

export default RequestProduct;
