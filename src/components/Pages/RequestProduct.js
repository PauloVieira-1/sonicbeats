import { Container, Row, Col } from "react-bootstrap";
import RequestProductForm from "../RequestProductForm/RequestProductForm.js";
import Hand from "../../assets/svg/hand.svg";
import "../RequestProductForm/Request.css";
import { useState } from "react";

function RequestProduct() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <Container className="my-3" sm={12} lg={6}>
        <Row>
          <Col className="p-4">
            {/* <h2 className="mb-3">Request Custom Speaker</h2>
            <p>
              At Artisan Sound, we believe in creating a personalized audio
              experience tailored just for you. Use the form below to request a
              custom speaker that meets your unique needs and preferences. Our
              bespoke speakers are crafted from our signature recycled Eik wood,
              ensuring exceptional sound quality and a positive environmental
              impact.
            </p> */}
            <Container
              className="main-container transition-fast"
              onClick={() => handleClick()}
            >
              <Row>
                <div
                  className={`card-custom bg-light rounded-4 mt-5 shadow m-2 ${isFlipped ? "flip" : ""}`}
                >
                  <div className="card-front p-5 mb-2">
                    <h1 className="fw-bold display-5 mb-5">
                      Help us design your speaker
                    </h1>
                    <h3 className="mt-2">Collaborate with Our Team</h3>
                    <p className="fw-lighter mt-3 mb-3">
                      Bring your vision to life with our expert guidance.
                      Customize every detail for a truly unique sound experience
                    </p>
                    <div className="text-center p-1">
                      <img
                        src={Hand}
                        className="img-fluid  mx-auto d-block mt-5"
                        alt="CLick Here"
                        style={{ width: "45px", height: "45px" }}
                      ></img>
                      <p className="fw-lighter mt-3">Click Here</p>
                    </div>
                  </div>
                  <div className="card-back">
                    <Col className="p-5">
                      <h4 className="mb-3">What we would like to know </h4>
                      <h6 className="fw-light">Speaker Specifications</h6>
                      <ul className="fw-lighter py-2 m-2 bullets">
                        <li className="text-start bullets">
                          Speaker Size: Select the size of the speaker you
                          desire (e.g., Small, Medium, Large).
                        </li>
                        <li className="text-start bullets">
                          Speaker Color: Select the color of the speaker you
                          desire (e.g., Black, Silver, white).
                        </li>
                        <li className="text-start bullets">
                          Preferred Wood Finish: Specify the wood finish you
                          prefer (e.g., Oak).
                        </li>
                        <li className="text-start bullets">
                          Additional Features: Specify any additional features
                          or customizations you want (e.g., extra bass,
                          waterproofing).
                        </li>
                      </ul>
                      <h6 className="fw-light">Design Specifications</h6>
                      <ul className="text-start fw-lighter">
                        <li className="text-start bullets">
                          Color Preferences: Indicate your preferred color(s)
                          for the speaker.
                        </li>
                        <li className="text-start bullets">
                          Engraving: Enter any text you would like engraved on
                          the speaker (e.g., name, quote).
                        </li>
                      </ul>
                      <h6 className="fw-light mt-5">* We cannot guarantee all requests can be met</h6>
                    </Col>
                  </div>
                </div>
              </Row>
            </Container>
          </Col>
          <Col className="p-5">
            <RequestProductForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RequestProduct;
