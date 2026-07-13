import { Container, Row, Col } from "react-bootstrap";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import Reveal from "../Reveal/Reveal";
import about from "../../assets/jpeg/about.JPG";

function About() {
  return (
    <>
      <div className="p-3 mt-5 pt-5">
        <Container className="my-3">
          <Row>
            <Col className="text-center">
              <Reveal>
                <span className="sb-eyebrow">About us</span>
                <h1 className="fw-bold display-3">
                  Where sound meets craftsmanship
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <h3 className="fw-lighter mt-3">
                  The people and the purpose behind SonicBeats
                </h3>
              </Reveal>
            </Col>
          </Row>
        </Container>
      </div>
      <main>
        {/* OUR STORY — open image / text split */}
        <Container className="py-section">
          <Row className="align-items-center g-4 g-lg-5">
            <Col lg={6}>
              <Reveal>
                <img
                  src={about}
                  alt="Dan Vorstenbosch, founder of SonicBeats"
                  className="img-fluid w-100 rounded-4"
                  style={{ objectFit: "cover", maxHeight: "560px" }}
                />
              </Reveal>
            </Col>
            <Col lg={6}>
              <Reveal delay={0.12}>
                <span className="sb-eyebrow">Our story</span>
                <h2 className="display-6 fw-bold">
                  Passion for sound, commitment to sustainability
                </h2>
                <p className="text-muted mt-3">
                  At Sonicbeats, we believe that great sound should come with a
                  great story. Our journey began with a passion for music and a
                  commitment to sustainability, led by our founder, Dan
                  Vorstenbosch. Each of our bespoke speakers is crafted from
                  the finest materials, including our signature recycled Oak
                  wood, ensuring not only exceptional sound quality but also a
                  positive impact on the environment.
                </p>
                <p className="text-muted">
                  Dan's vision was to create products that blend innovative
                  technology with traditional craftsmanship, reflecting both a
                  dedication to superior audio experiences and a sustainable
                  future.
                </p>
                <div className="mt-4 pt-3 border-top">
                  <p className="fw-bold mb-0">Dan Vorstenbosch</p>
                  <p className="text-muted small mb-0">Founder, SonicBeats</p>
                </div>
              </Reveal>
            </Col>
          </Row>
        </Container>

        {/* OUR MISSION — centered editorial, magazine columns */}
        <Container className="pb-section text-center" style={{ maxWidth: "60rem" }}>
          <Reveal>
            <span className="sb-eyebrow">Our mission</span>
            <h2 className="display-6 fw-bold">Innovation meets tradition</h2>
            <p className="text-muted mt-4 sb-columns">
              At Sonicbeats, our mission is to blend innovative technology
              with traditional craftsmanship to create speakers that deliver
              unparalleled audio experiences. We strive to push the boundaries
              of sound engineering while honoring the timeless beauty of
              natural materials. Every Sonicbeats speaker is a testament to
              meticulous craftsmanship. Our team of skilled artisans
              handcrafts each unit with precision and care, ensuring that
              every detail meets our exacting standards. From the rich, warm
              tones of our signature recycled Oak wood to the cutting-edge
              Bluetooth 5.0 technology, our speakers are designed to impress
              both the eyes and ears. We believe in the power of sound to
              elevate everyday moments and create unforgettable experiences.
            </p>
          </Reveal>
        </Container>

        {/* SUSTAINABILITY — full-width dark band */}
        <div className="sb-dark-section text-white">
          <Container className="py-section">
            <Row>
              <Col lg={9}>
                <Reveal>
                  <span className="sb-chip-dark">Sustainability</span>
                  <h2 className="display-5 fw-bold mt-4">
                    Eco-friendly excellence.
                  </h2>
                  <p className="sb-text-dim mt-4">
                    Our commitment to sustainability is woven into every
                    aspect of our design and production processes. It begins
                    with our use of recycled oak wood, carefully selected and
                    repurposed from floor boards to reduce waste and minimize
                    our ecological footprint.
                  </p>
                  <p className="sb-text-dim">
                    From energy-efficient manufacturing techniques to
                    sustainable materials, every step of our process reflects
                    our dedication to environmental stewardship. Our speakers
                    are designed not only to deliver superior sound but also
                    to contribute positively to the planet — each one a
                    testament to our commitment to both quality and the
                    environment.
                  </p>
                </Reveal>
              </Col>
            </Row>
          </Container>
        </div>

        <Reveal>
          <ImageCarousel />
        </Reveal>
      </main>
    </>
  );
}

export default About;
