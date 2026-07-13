import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Intro.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import IntroImage from "../../assets/jpeg/introimage.jpeg";

function Intro() {
  return (
    <Container id="intro" className="mt-5 pt-3 pt-lg-5">
      <Row className="mt-2 mt-lg-5 align-items-center gy-5">
        <Col lg={6} sm={12}>
          <span className="sb-eyebrow sb-eyebrow-intro transition-fast">
            Handcrafted in the Netherlands
          </span>
          <h1 className="display-2 fw-bold transition-fast">
            Where sound meets craftsmanship.
          </h1>
          <div className="transition-slow">
            <p className="lead mt-4" style={{ maxWidth: "33rem" }}>
              Crafting superior sound since 2018. Meticulously handmade
              speakers, designed to deliver unparalleled audio quality and
              timeless craftsmanship.
            </p>
            <div className="d-grid d-sm-flex gap-2 gap-sm-3 mt-4">
              <Link to="/shop" className="text-decoration-none">
                <Button
                  variant="primary"
                  className="btn-rounded px-4 py-2"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Shop speakers
                </Button>
              </Link>
              <Link to="/gallery" className="text-decoration-none">
                <Button
                  variant="outline-secondary"
                  className="btn-rounded px-4 py-2"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Discover projects
                </Button>
              </Link>
            </div>
          </div>
        </Col>
        <Col lg={6} sm={12}>
          <div className="sb-hero-visual">
            <img
              src={IntroImage}
              alt="SonicBeats handcrafted speaker"
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;
