import { Container, Row, Col } from "react-bootstrap";

function RequestProduct() {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col className="p-4">
            <h2 className="mb-3">Request Custom Speaker</h2>
            <p>
              At Artisan Sound, we believe in creating a personalized audio
              experience tailored just for you. Use the form below to request a
              custom speaker that meets your unique needs and preferences. Our
              bespoke speakers are crafted from our signature recycled Eik wood,
              ensuring exceptional sound quality and a positive environmental
              impact.
            </p>
            <Container className="bg-light rounded-4 mt-5 shadow">
              <Row>
                <Col className="p-4">
                  <h4 className="mb-3">What we would like to know </h4>
                  <h6 className="fw-light">Speaker Specifications</h6>
                  <ul
                    className="fw-lighter py-2"
                    style={{ listStyle: "circle" }}
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
              </Row>
            </Container>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default RequestProduct;
