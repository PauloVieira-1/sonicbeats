import Intro from "../Intro/Intro";
import ProductCards from "../ProductCards/ProductCards";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import ExpandingCards from "../Expandingcards/ExpandingCards";
import Reveal from "../Reveal/Reveal";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

import EndImage from "../../assets/png/End-Image.png";
import Image2 from "../../assets/jpeg/test3.JPG";
import Image3 from "../../assets/jpeg/ProductsAvailable/Available2.jpeg";
import Image4 from "../../assets/jpeg/simplisticbg.jpeg";
import SoundbarImg from "../../assets/jpeg/ProductsAvailable/SoundbarImg.jpeg";
import A2 from "../../assets/jpeg/ProductsAvailable/A2.jpeg";

import { Link } from "react-router-dom";

const images = [
  {
    text: "Handcrafted speakers",
    image: A2,
    subtext: "Experience the finest craftsmanship.",
  },
  {
    text: "Portable power",
    image: Image2,
    subtext: "Unleash power on the go.",
  },
  {
    text: "Sonic purity",
    image: Image3,
    subtext: "Hear the difference in every note.",
  },
  {
    text: "Simplistic beauty",
    image: Image4,
    subtext: "Elegance in simplicity.",
  },
];

function Home() {
  return (
    <>
      <main className="mb-5 mt-5">
        <Intro />
        <ProductCards />
      </main>

      {/* BEHIND THE SCENES — video */}
      <Container className="py-section">
        <Reveal className="text-center mb-5">
          <span className="sb-eyebrow">Behind the scenes</span>
          <h2 className="display-5 fw-bold">Step inside the workshop.</h2>
        </Reveal>
        <Reveal delay={0.1} className="rounded-4 overflow-hidden shadow">
          <VideoPlayer
            publicId="7228719a-4d7f-4452-950b-b8f9ba407612_h8abdu"
            id="video-player"
          />
        </Reveal>
      </Container>

      {/* COMING SOON — dark feature section */}
      <div className="sb-dark-section text-white">
        <Container className="py-section">
          <Row className="align-items-center g-4 g-lg-5">
            <Col lg={6} sm={12}>
              <Reveal>
                <div
                  className="rounded-4 overflow-hidden"
                  style={{
                    border: "1px solid rgba(255,255,255,0.09)",
                    boxShadow: "0 40px 80px -32px rgba(0,0,0,0.65)",
                  }}
                >
                  <img
                    src={SoundbarImg}
                    alt="Upcoming SonicBeats soundbar"
                    className="img-fluid w-100 d-block"
                    style={{
                      objectFit: "cover",
                      maxHeight: "520px",
                      filter: "brightness(0.55) saturate(1.2) contrast(1.1)",
                    }}
                  />
                </div>
              </Reveal>
            </Col>
            <Col lg={6} sm={12}>
              <Reveal delay={0.12}>
                <span className="sb-chip-dark">Coming soon</span>
                <h2 className="display-4 fw-bold mt-4">
                  A new era of home cinema.
                </h2>
                <p className="fs-5 fw-light mt-4 sb-text-dim">
                  Introducing our upcoming{" "}
                  <strong>All-in-One Wireless Hi-Fi Cinema System</strong> —
                  optical &amp; RCA inputs, Bluetooth 5.0, remote bass and
                  treble tuning, an adjustable display, and a powerful built-in
                  subwoofer engineered for pure, immersive sound.
                </p>
                <Button
                  className="btn-rounded wide mt-3"
                  variant="outline-light"
                >
                  Learn more soon
                </Button>
              </Reveal>
            </Col>
          </Row>
        </Container>
      </div>

      {/* OUR STORY */}
      <Container className="py-section text-center">
        <Reveal>
          <span className="sb-eyebrow">Our story</span>
          <h2 className="display-4 fw-bold">The story behind the sound.</h2>
          <Link to={"/about"} className="text-decoration-none">
            <Button
              className="btn-rounded wide mt-4"
              variant="outline-secondary"
              onClick={() => window.scrollTo(0, 0)}
            >
              About us
            </Button>
          </Link>
        </Reveal>
      </Container>

      {/* ADDITIONAL SERVICES */}
      <Container className="pb-section">
        <Reveal>
          <Row className="g-0 rounded-4 overflow-hidden bg-custom-color-grey align-items-stretch">
            <Col lg={7} sm={12}>
              <img
                src={EndImage}
                alt="SonicBeats services"
                className="w-100 h-100"
                style={{
                  objectFit: "cover",
                  minHeight: "320px",
                  maxHeight: "560px",
                }}
              />
            </Col>
            <Col
              lg={5}
              sm={12}
              className="p-5 d-flex flex-column justify-content-center"
            >
              <span className="sb-eyebrow">Beyond speakers</span>
              <h2 className="display-5 fw-bold">Additional services.</h2>
              <p className="text-muted mt-3">
                Installation, tuning, custom builds and repairs — we look after
                your sound long after it leaves the workshop.
              </p>
              <div className="mt-2">
                <Link
                  to="/additional-services"
                  className="text-decoration-none"
                >
                  <Button
                    className="btn-rounded wide"
                    variant="outline-secondary"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Learn more
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Reveal>
      </Container>

      {/* EXPANDING CARDS */}
      <Container fluid className="pb-section px-0">
        <Reveal className="text-center mb-5 px-3">
          <span className="sb-eyebrow">In the wild</span>
          <h2 className="display-5 fw-bold">Designed to stand out.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ExpandingCards images={images} />
        </Reveal>
      </Container>
    </>
  );
}

export default Home;
