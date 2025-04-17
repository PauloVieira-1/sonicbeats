import { Container, Row, Col } from "react-bootstrap";
import { useRef, useEffect, useMemo } from "react";

import GalleryText from "../Gallery/GalleryText";
import GalleryImage from "../Gallery/GalleryImage";
import preloadImages from "../Navbar/LoadImages";

function Gallery() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  const revealRefs = useMemo(() => [headingRef, paraRef], []);

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

  return (
    <>
      <Container className="my-3">
        <Row>
          <Col className="text-center p-5 my-5">
            <h1 className="fw-bold display-3" ref={headingRef}>
              Welcome to the Sonicbeat Gallery
            </h1>
            <h3 className="fw-lighter mt-3" ref={paraRef}>
              Explore Our Craftsmanship and Innovation in Every Detail
            </h3>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={4} className="my-3">
            <GalleryText
              subHeading={"Explore some of our ready to produce models"}
              button={true}
              page={"shop"}
            >
              {" "}
              Shop{" "}
            </GalleryText>
          </Col>
          <Col xs={12} md={4} className="my-3">
            <GalleryImage
              imageName={preloadImages[0]}
              subHeading="A look of what is to come"
              description="A concept for a speake that is large, powerful and yet portable"
              id={1}
            >
              Vision
            </GalleryImage>
          </Col>
          <Col xs={12} md={4} className="my-3">
            <GalleryImage
              imageName={preloadImages[1]}
              id={2}
              subHeading="The Blackbox is portable, lightweight, and made out of natural pinewood"
              description="100-watt Rms with 12hr battery life"
            >
              Blackbox
            </GalleryImage>
          </Col>
        </Row>

        <Row className="my-">
          <Col xs={12} md={4} className="my-3">
            <GalleryImage
              imageName={preloadImages[2]}
              id={3}
              subHeading="A compact design for those on the go"
              description="These compact speakers deliver powerful, clear sound, handcrafted with sustainable pine wood for an eco-friendly audio experience."
            >
              Perfect for Daily Use
            </GalleryImage>
          </Col>
          <Col xs={12} md={4} className="my-3">
            <GalleryImage
              imageName={preloadImages[3]}
              id={4}
              subHeading="Style and beautiful, made out of natural Oakwood"
              description="12V battery, and weighs only 9.5kg"
            >
              Enigma
            </GalleryImage>
          </Col>
          <Col xs={12} md={4} className="my-3">
            <GalleryText
              subHeading={"Find out about thos who bring our designs to life"}
              button={true}
              page={"about"}
            >
              {" "}
              About Us{" "}
            </GalleryText>{" "}
          </Col>
        </Row>
        <Row className="m">
          <Col xs={12} md={4} className="my-3">
            <GalleryImage
              imageName={preloadImages[4]}
              id={5}
              subHeading="Studio monitor speakers designed for audiophiles"
              description="The button arrangement is designed to promote an easy grip"
            >
              Tinymen
            </GalleryImage>
          </Col>
          <Col xs={12} md={4} className="my-3">
            <GalleryText
              subHeading={"Design your own speaker in collaboration with us"}
              button={true}
              page={"request-product"}
            >
              {" "}
              Request a Custom Product{" "}
            </GalleryText>
          </Col>
          <Col xs={12} md={4} className="my-3">
            <GalleryImage
              imageName={preloadImages[5]}
              id={6}
              subHeading="Bike system integration"
              description="Integrated speaker system, with control dashboard"
            >
              A Look to the Past
            </GalleryImage>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Gallery;
