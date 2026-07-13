import { Container, Row, Col } from "react-bootstrap";

import GalleryText from "../Gallery/GalleryText";
import GalleryImage from "../Gallery/GalleryImage";
import Reveal from "../Reveal/Reveal";
import preloadImages from "../Navbar/LoadImages";

function Gallery() {
  return (
    <>
      <Container className="my-3">
        <Row>
          <Col className="text-center p-5 my-5">
            <Reveal>
              <span className="sb-eyebrow">Gallery</span>
              <h1 className="fw-bold display-3">
                Welcome to the SonicBeats gallery
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <h3 className="fw-lighter mt-3">
                Explore our craftsmanship and innovation in every detail
              </h3>
            </Reveal>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={4} className="my-3">
            <Reveal delay={0}>
              <GalleryText
                subHeading={"Explore some of our ready to produce models"}
                button={true}
                page={"shop"}
              >
                Shop
              </GalleryText>
            </Reveal>
          </Col>
          <Col xs={12} md={4} className="my-3">
            <Reveal delay={0.08}>
              <GalleryImage
                imageName={preloadImages[0]}
                subHeading="A look of what is to come"
                description="A concept for a speaker that is large, powerful and yet portable"
                id={1}
              >
                Vision
              </GalleryImage>
            </Reveal>
          </Col>
          <Col xs={12} md={4} className="my-3">
            <Reveal delay={0.16}>
              <GalleryImage
                imageName={preloadImages[1]}
                id={2}
                subHeading="The Blackbox is portable, lightweight, and made out of natural pinewood"
                description="100-watt Rms with 12hr battery life"
              >
                Blackbox
              </GalleryImage>
            </Reveal>
          </Col>
        </Row>

        <Row className="my-3">
          <Col xs={12} md={4} className="my-3">
            <Reveal delay={0}>
              <GalleryImage
                imageName={preloadImages[2]}
                id={3}
                subHeading="A compact design for those on the go"
                description="These compact speakers deliver powerful, clear sound, handcrafted with sustainable pine wood for an eco-friendly audio experience."
              >
                Perfect for Daily Use
              </GalleryImage>
            </Reveal>
          </Col>
          <Col xs={12} md={4} className="my-3">
            <Reveal delay={0.08}>
              <GalleryImage
                imageName={preloadImages[3]}
                id={4}
                subHeading="Style and beautiful, made out of natural Oakwood"
                description="12V battery, and weighs only 9.5kg"
              >
                Enigma
              </GalleryImage>
            </Reveal>
          </Col>
          <Col xs={12} md={4} className="my-3">
            <Reveal delay={0.16}>
              <GalleryText
                subHeading={"Find out about those who bring our designs to life"}
                button={true}
                page={"about"}
              >
                About Us
              </GalleryText>
            </Reveal>
          </Col>
        </Row>
        <Row className="my-3">
          <Col xs={12} md={4} className="my-3">
            <Reveal delay={0}>
              <GalleryImage
                imageName={preloadImages[4]}
                id={5}
                subHeading="Studio monitor speakers designed for audiophiles"
                description="The button arrangement is designed to promote an easy grip"
              >
                Tinymen
              </GalleryImage>
            </Reveal>
          </Col>
          <Col xs={12} md={4} className="my-3">
            <Reveal delay={0.08}>
              <GalleryText
                subHeading={"Design your own speaker in collaboration with us"}
                button={true}
                page={"request-product"}
              >
                Request a Custom Product
              </GalleryText>
            </Reveal>
          </Col>
          <Col xs={12} md={4} className="my-3">
            <Reveal delay={0.16}>
              <GalleryImage
                imageName={preloadImages[5]}
                id={6}
                subHeading="Bike system integration"
                description="Integrated speaker system, with control dashboard"
              >
                A Look to the Past
              </GalleryImage>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Gallery;
