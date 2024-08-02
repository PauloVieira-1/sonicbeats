import { Container, Row, Col } from "react-bootstrap";
import RequestProductForm from "../RequestProductForm/RequestProductForm.js";
import Hand from "../../assets/svg/hand.svg";
import "../RequestProductForm/Request.css";

function RequestProduct() {
  
  const handleFlip = () => {
    const card = document.querySelector(".card-custom");
    card.classList.toggle("flip");
  };
  
  
  return (
    <>
      <Container className="my-3">
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
            <Container className="main-container" onClick={() => handleFlip()}>
              <Row>
                <div className="card-custom bg-light rounded-4 mt-5 shadow m-2">
                  <div className="card-front p-5 mb-2">
                    <h1 className="fw-bold display-5 mb-5">Help us design your speaker</h1> 
                    <h3 className="mt-2">Collaborate with Our Team</h3>
                    <p className="fw-lighter mt-3 mb-3">
                    Bring your vision to life with our expert guidance. Customize every detail for a truly unique sound experience
                    </p>
                    <div className="text-center p-1">
                      <img src={Hand} className="img-fluid  mx-auto d-block mt-5" alt="CLick Here" style={{width: "45px", height: "45px"}}></img>
                      <p className="fw-lighter mt-3">Click Here</p>
                    </div>
                    
                    </div>
                  <div className="card-back">
                  <Col className="p-5">
                    <h4 className="mb-3">What we would like to know </h4>
                    <h6 className="fw-light">Speaker Specifications</h6>
                    <ul
                      className="fw-lighter py-2 m-2"
                    >
                      <li className="text-start">
                        Speaker Size: Select the size of the speaker you desire
                        (e.g., Small, Medium, Large).
                      </li>
                      <li className="text-start">
                        Speaker Color: Select the color of the speaker you desire
                        (e.g., Black, Silver, white).
                      </li>
                      <li className="text-start">
                        Preferred Wood Finish: Choose from our available recycled
                        Eik wood finishes.
                      </li>
                      <li className="text-start">
                        Additional Features: Specify any additional features or
                        customizations you want (e.g., extra bass, waterproofing).
                      </li>
                    </ul>
                    <h6 className="fw-light">Design Specifications</h6>
                    <ul className="text-start fw-lighter">
                      <li className="text-start">
                        Color Preferences: Indicate your preferred color(s) for
                        the speaker.
                      </li>
                      <li className="text-start">
                        Engraving: Enter any text you would like engraved on the
                        speaker (e.g., name, quote).
                      </li>
                    </ul>
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
