import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServiceCard from "../AdditionalServices/ServiceCard";
import Reveal from "../Reveal/Reveal";
import Speaker from "../../assets/svg/speaker-fill.svg";
import Gear from "../../assets/svg/gear-wide-connected.svg";
import Note from "../../assets/svg/music-note-list.svg";
import Tools from "../../assets/svg/tools.svg";

import image from "../../assets/GalleryImages/Train.JPG";

const services = [
  {
    image: Speaker,
    title: "Installation",
    description:
      "Our expert team provides professional installation services, ensuring your speakers and audio systems are set up for optimal performance.",
  },
  {
    image: Gear,
    title: "Tuning",
    description:
      "Achieve the perfect sound with our advanced tuning services. We'll calibrate your audio system to match your wants and needs.",
  },
  {
    image: Note,
    title: "Custom",
    description:
      "Unleash your creativity with our custom speaker design service. Collaborate with our craftsmen to create a speaker that perfectly aligns with your vision.",
  },
  {
    image: Tools,
    title: "Repair",
    description:
      "Extend the life of your beloved audio equipment with our repair services. We specialize in restoring your system to its original brilliance.",
  },
];

function AdditionalServices() {
  return (
    <Container className="mb-5 mt-5 pt-5">
      {/* Editorial two-column header */}
      <Row className="pt-4 pb-4 align-items-end g-4">
        <Col lg={5}>
          <Reveal>
            <span className="sb-eyebrow">What we offer</span>
            <h1 className="display-3 fw-bold mb-0">Our services</h1>
          </Reveal>
        </Col>
        <Col lg={7}>
          <Reveal delay={0.12}>
            <p className="text-muted mb-2">
              At SonicBeats, we don't just craft speakers—we create soundscapes
              that bring your music to life. Our additional services are
              designed to elevate your audio experience, ensuring every detail,
              from installation to fine-tuning, is handled with the care and
              expertise your sound deserves.
            </p>
          </Reveal>
        </Col>
      </Row>

      {/* Service grid */}
      <Row className="g-4 mt-1">
        {services.map((service, index) => (
          <Col xs={12} md={6} lg={3} key={service.title}>
            <Reveal delay={index * 0.08} className="h-100">
              <ServiceCard
                image={service.image}
                title={service.title}
                description={service.description}
              />
            </Reveal>
          </Col>
        ))}
      </Row>

      {/* CTA banner */}
      <Reveal className="mt-5">
        <div className="position-relative rounded-4 overflow-hidden">
          <img
            src={image}
            alt="SonicBeats speaker on the go"
            className="w-100 d-block"
            style={{ objectFit: "cover", height: "440px" }}
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background:
                "linear-gradient(180deg, transparent 25%, rgba(0,0,0,0.65) 100%)",
            }}
          />
          <div className="position-absolute bottom-0 start-0 p-4 p-lg-5 text-white">
            <h2 className="fw-bold">Wherever sound takes you.</h2>
            <p className="sb-text-dim mb-3">
              Whether you're designing your dream setup or maintaining a
              trusted favorite, we're here to help.
            </p>
            <Link to="/request-product" className="text-decoration-none">
              <Button
                variant="light"
                className="btn-rounded px-4 fw-bold"
                onClick={() => window.scrollTo(0, 0)}
              >
                Request a custom build
              </Button>
            </Link>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}

export default AdditionalServices;
