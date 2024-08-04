import { Container, Row, Col } from "react-bootstrap";
import ExampleImage from "../../assets/jpeg/Vertical.jpeg";
import Card from "react-bootstrap/Card";
import Dan from "../../assets/jpeg/dan_2.jpg";
import Daph from "../../assets/jpeg/daphine.jpg";

function TeamComponent(props) {
  return (
    <>
      <Container
        style={{ minHeight: "400px", zIndex: "0" }}
        className={`mt-3 mb-5 bg-secondary rounded-4 ${props.shadow ? "shadow" : ""} ${props.active ? "transition-width" : "transition-reverse-width"}`}
      >
        <Row>
          <Col className="p-3">
            <Card className="bg-dark text-white">
              <Card.Img src={Dan} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Daphine Vorstenbosch</Card.Title>
                <Card.Text className="fw-light">
                  Designer & Marketing Lead
                </Card.Text>
                <Card.Text>
                  Daphine Vorstenbosch, the creative force behind Sonicraft's
                  aesthetic and brand, leads the design and marketing efforts.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col className="p-3">
            <Card className="bg-dark text-white" style={{ height: "100%" }}>
              <Card.Img src={Daph} alt="Card image" className=" h-100" />
              <Card.ImgOverlay>
                <Card.Title>Dan Vorstenbosch</Card.Title>
                <Card.Text className="fw-light">
                  Founder & Master Craftsman
                </Card.Text>
                <Card.Text>
                  Dan Vorstenbosch, the heart and soul of Sonicraft,
                  meticulously handcrafts each speaker from scratch.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col className="p-3">
            <Card className="bg-dark text-white">
              <Card.Img src={""} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text className="fw-light">
                  Founder & Master Craftsman
                </Card.Text>
                <Card.Text>
                  Dan Vorstenbosch, the heart and soul of Sonicraft,
                  meticulously handcrafts each speaker from scratch. With an
                  unwavering passion for sound and a commitment to
                  sustainability, Dan ensures every Sonicraft speaker delivers
                  exceptional audio quality while being environmentally
                  conscious. His expertise in combining traditional
                  craftsmanship with modern technology defines Sonicraft's
                  unique and bespoke products.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TeamComponent;
