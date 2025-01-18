import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Dan from "../../assets/jpeg/Dan_3.JPG";
import Daph from "../../assets/jpeg/Daph.JPG";
import "./InfoSection.css";

function TeamComponent(props) {
  return (
    <>
      <Container
        style={{ minHeight: "600px", zIndex: "-10", position: "relative" }}
        id="team"
        className={`mt-3 mb-5 bg-secondary rounded-4 team-effect ${props.shadow ? "shadow" : ""} ${props.active ? "transition-down" : "transition-up"}`}
      >
        <Row className="">
          <Col className="p-3">
            <Card className="bg-dark text-white" style={{ maxHeight: "570px" }}>
              <Card.Img
                src={Dan}
                alt="Card image"
                style={{
                  maxHeight: "570px",
                  objectFit: "cover",
                  width: "100%",
                  overflow: "hidden",
                }}
              />
              <Card.ImgOverlay>
                <div className="bg-dark py-3 px-3 rounded">
                  <Card.Title>Dan Vorstenbosch</Card.Title>
                  <Card.Text className="fw-light">
                    Founder & Master Craftsman
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col className="p-3">
            <Card
              className="bg-dark text-white"
              style={{ maxHeight: "570px", height: "100%" }}
            >
              <Card.Img
                src={Daph}
                alt="Card image"
                style={{ overflow: "hidden", height: "100%" }}
              />
              <Card.ImgOverlay>
                <div className="bg-dark py-3 px-3 rounded">
                  <Card.Title>Daphine Vorstenbosch</Card.Title>
                  <Card.Text className="fw-light">
                    Designer and Marketer
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col className="p-3">
            <Card className="bg-dark text-white">
              <Card.Img src={""} alt="Card image" />
              <Card.ImgOverlay>
                <div className="bg-dark py-3 px-3 rounded">
                  <Card.Title>XYZ</Card.Title>
                  <Card.Text className="fw-light">XYZ</Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TeamComponent;
