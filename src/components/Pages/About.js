import { Container, Row, Col } from "react-bootstrap";
import InfoSection from "../InfoSection/InfoSection";
import VerticalImage from "../../assets/jpeg/dan.jpeg";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import TeamComponent from "../InfoSection/TeamComponent";
import { useMemo } from "react";
import { useRef, useState, useEffect } from "react";

function About() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const infoSection = useRef(null);

  const revealRefs = useMemo(() => [headingRef, paraRef, infoSection], []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target) {
            case headingRef.current:
              entry.target.classList.add("transition-fast");
              break;
            case paraRef.current:
              entry.target.classList.add("transition-slow");
              break;
            case infoSection.current:
              entry.target.classList.add("fade-in-animation");
              break;
            default:
              break;
          }
        }
      });
    });

    revealRefs.forEach((ref) => {
      if (ref) {
        observer.observe(ref.current);
      }
    });

    return () => {
      revealRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [revealRefs]);

  const DiscoverTeamRef = useRef();

  const [teamActive, setTeamActive] = useState(false);
  function handleSelect() {
    setTeamActive(!teamActive);
    console.log(teamActive);
  }

  return (
    <>
      <div className=" p-3 mt-5">
        <Container className="my-3">
          <Row>
            <Col className="text-center">
              <h1 className="fw-bold display-3" ref={headingRef}>
                About Us
              </h1>
              <h3 className="fw-lighter mt-3" ref={paraRef}>
                Where Sound Meets Craftsmanship
              </h3>
            </Col>
          </Row>
        </Container>
      </div>
      <main>
        <div className="my-5" style={{ zIndex: "100" }}>
          <InfoSection
            title={"Our Story"}
            heading={"Passion for Sound, Commitment to Sustainability"}
            content={
              "At Sonicraft, we believe that great sound should come with a great story. Our journey began with a passion for music and a commitment to sustainability, led by our founder, Dan Vorstenbosch. Each of our bespoke speakers is crafted from the finest materials, including our signature recycled Eik wood, ensuring not only exceptional sound quality but also a positive impact on the environment. Dan's vision was to create products that blend innovative technology with traditional craftsmanship, reflecting both a dedication to superior audio experiences and a sustainable future."
            }
            shadow={true}
            image={VerticalImage}
            button={true}
            ref={DiscoverTeamRef}
            onSelect={handleSelect}
            active={teamActive}
          />
        </div>
        <TeamComponent shadow={true} active={teamActive} />
        <div ref={infoSection}>
          <InfoSection
            title={"Our Mission"}
            heading={"Innovation Meets Tradition"}
            content={
              "At Sonicraft, our mission is to blend innovative technology with traditional craftsmanship to create speakers that deliver unparalleled audio experiences. We strive to push the boundaries of sound engineering while honoring the timeless beauty of natural materials. Every Sonicraft speaker is a testament to meticulous craftsmanship. Our team of skilled artisans handcrafts each unit with precision and care, ensuring that every detail meets our exacting standards. From the rich, warm tones of our signature recycled Eik wood to the cutting-edge Bluetooth 5.0 technology, our speakers are designed to impress both the eyes and ears. We believe in the power of sound to elevate everyday moments and create unforgettable experiences. That’s why we are dedicated to using sustainable practices in our manufacturing process, ensuring that our products not only sound great but also contribute positively to the environment."
            }
          />
          <InfoSection
            title={"Commitment to Sustainability"}
            heading={"Eco-Friendly Excellence"}
            content={
              "At Sonicraft, our commitment to sustainability is woven into every aspect of our design and production processes. We believe that creating exceptional audio experiences should go hand-in-hand with preserving the environment. Our dedication to eco-friendly practices begins with our use of recycled Eik wood, carefully selected and repurposed to reduce waste and minimize our ecological footprint. We are constantly innovating to find new ways to enhance the sustainability of our products. From employing energy-efficient manufacturing techniques to choosing sustainable materials, every step of our process reflects our dedication to environmental stewardship. Our speakers are designed not only to deliver superior sound but also to contribute positively to the planet. By integrating cutting-edge technology with sustainable practices, we ensure that each Sonicraft product is a testament to our commitment to both quality and the environment. Our mission is to provide you with exceptional audio experiences while promoting a healthier, more sustainable future."
            }
          />
        </div>
        <ImageCarousel />
      </main>
    </>
  );
}

export default About;
