import { Container, Row, Col } from "react-bootstrap";
import { useRef, useEffect } from "react";

import GalleryText from "../Gallery/GalleryText";
import GalleryImage from "../Gallery/GalleryImage";

import Image1 from "../../assets/jpeg/Product1.jpeg";

function Gallery() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  const revealRefs = [headingRef, paraRef];

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
              Welcome to the Sonicraft Gallery
            </h1>
            <h3 className="fw-lighter mt-3" ref={paraRef}>
              Explore Our Craftsmanship and Innovation in Every Detail
            </h3>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="my-4">
          <Col>
            <GalleryText
              subHeading={"Discover how we bring the design to reality"}
              button={true}
            >
              {" "}
              The Design Process{" "}
            </GalleryText>
          </Col>
          <Col>
            <GalleryImage imageName={Image1} id={1}>
              ExampleHeading
            </GalleryImage>
          </Col>
          <Col>
            <GalleryImage imageName={Image1} id={2}>
              ExampleHeading
            </GalleryImage>
          </Col>
        </Row>

        <Row className="my-4">
          <Col>
            <GalleryImage imageName={Image1} id={3}>
              ExampleHeading
            </GalleryImage>
          </Col>
          <Col>
            <GalleryImage imageName={Image1} id={4}>
              ExampleHeading
            </GalleryImage>
          </Col>
          <Col>
            <GalleryText
              subHeading={"Discover how we bring the design to reality"}
              button={true}
            >
              {" "}
              The Design Process{" "}
            </GalleryText>{" "}
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <GalleryImage imageName={Image1} id={5}>
              ExampleHeading
            </GalleryImage>
          </Col>
          <Col>
            <GalleryText
              subHeading={"Discover how we bring the design to reality"}
              button={true}
            >
              {" "}
              The Design Process{" "}
            </GalleryText>
          </Col>
          <Col>
            <GalleryImage imageName={Image1} id={6}>
              ExampleHeading
            </GalleryImage>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Gallery;
