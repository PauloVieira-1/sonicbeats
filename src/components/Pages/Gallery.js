import { Container, Row, Col } from "react-bootstrap";
import { useRef, useEffect, useMemo } from "react";

import GalleryText from "../Gallery/GalleryText";
import GalleryImage from "../Gallery/GalleryImage";

import Image from "../../assets/GalleryImages/Strijp.JPG";
import Image1 from "../../assets/GalleryImages/Table1.JPG";
import Image2 from "../../assets/GalleryImages/Train.JPG";
import Image3 from "../../assets/GalleryImages/Table3.JPG";
import Image4 from "../../assets/GalleryImages/Bench.JPG";
import Image5 from "../../assets/GalleryImages/Image1-2.JPG";


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
              page={"designprocess"}
            >
              {" "}
              The Design Process{" "}
            </GalleryText>
          </Col>
          <Col>
            <GalleryImage imageName={Image} subHeading="subHeading" description="description" id={1}>
              Heading
            </GalleryImage>
          </Col>
          <Col>
            <GalleryImage imageName={Image1} id={2}>
              Heading
            </GalleryImage>
          </Col>
        </Row>

        <Row className="my-4">
          <Col>
            <GalleryImage imageName={Image2} id={3}>
              Heading
            </GalleryImage>
          </Col>
          <Col>
            <GalleryImage imageName={Image3} id={4} subHeading="Compact Powerhouse with Superior Sound" description="These compact speakers deliver powerful, clear sound, handcrafted with sustainable Eik wood for an eco-friendly audio experience. Featuring our unique OmniWave technology, they provide immersive 360-degree sound, filling any space with rich audio.">
              The Little Men
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
            <GalleryImage imageName={Image4} id={5}>
              Heading
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
            <GalleryImage imageName={Image5} id={6}>
              Heading
            </GalleryImage>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Gallery;
