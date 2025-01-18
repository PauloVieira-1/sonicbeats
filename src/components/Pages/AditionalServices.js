import { Container, Row, Col, Image } from "react-bootstrap";
import ServiceCard from "../AdditionalServices/ServiceCard";
import Speaker from "../../assets/svg/speaker-fill.svg";
import Gear from "../../assets/svg/gear-wide-connected.svg";
import Note from "../../assets/svg/music-note-list.svg";
import Tools from "../../assets/svg/tools.svg";

import image from "../../assets/GalleryImages/Train.JPG";
function AdditionalServices() {
  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={5} className="">
          <h1 className=" display-3 me-4 fw-bold">Our services</h1>
          <p className="me-4">
            At SonicBeats, we don’t just craft speakers—we create soundscapes
            that bring your music to life. Our additional services are designed
            to elevate your audio experience, ensuring every detail, from
            installation to fine-tuning, is handled with the care and expertise
            your sound deserves. Whether you're designing your dream setup or
            maintaining a trusted favorite, we’re here to help you make every
            note unforgettable.
          </p>
          <Image
            src={image}
            className="border rounded bottom-0"
            fluid
            style={{
              height: "100%",
              minWidth: "100%",
              maxHeight: "550px",
              objectFit: "cover",
            }}
          />
        </Col>
        <Col md={7}>
          <Row className="mt-5 mb-3">
            <Col xs={12} lg={6} className="mb-3">
              <ServiceCard
                image={Speaker}
                title="Installation"
                description="Our expert team provides professional installation services, ensuring your speakers and audio systems are set up for optimal performance. From home theaters to commercial spaces, we handle every detail with precision."
              />
            </Col>
            <Col>
              <ServiceCard
                image={Gear}
                title="Tunning"
                description="Achieve the perfect sound with our advanced tuning services. We’ll calibrate your audio system to match the acoustics of your space, creating a rich and immersive listening experience tailored to your environment."
              />
            </Col>
          </Row>
          <Row className="mb-4">
            <Col xs={12} lg={6} className="mb-3">
              <ServiceCard
                image={Note}
                title="Custom"
                description="Unleash your creativity with our custom speaker design service. Collaborate with our craftsmen to create bespoke speakers that reflect your style and deliver unparalleled sound quality."
              />
            </Col>
            <Col>
              <ServiceCard
                image={Tools}
                title="Repair"
                description="Extend the life of your beloved audio equipment with our repair services. Our skilled technicians can diagnose and fix a wide range of issues, restoring your system to its original brilliance."
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default AdditionalServices;
