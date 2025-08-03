import Intro from "../Intro/Intro";
import ProductCards from "../ProductCards/ProductCards";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import ExpandingCards from "../Expandingcards/ExpandingCards";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Tabs, Tab } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "../../styles/colors.css";
import "../../styles/Global.css";
import EndImage from "../../assets/png/End-Image.png";
import Logo from "../../assets/jpeg/Logo2.jpeg";
import image from "../../assets/jpeg/Available3.jpeg";
import Image2 from "../../assets/jpeg/test3.JPG";
import Image3 from "../../assets/jpeg/ProductsAvailable/Available2.jpeg";
import Image4 from "../../assets/jpeg/simplisticbg.jpeg";

import { useEffect, useRef, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  { text: "Handcrafted speakers", image: image, subtext: "Experience the finest craftsmanship." },
  { text: "Portable power", image: Image2, subtext: "Unleash power on the go." },
  { text: "Sonic purity", image: Image3, subtext: "Hear the difference in every note." },
  { text: "Simplistic beauty", image: Image4, subtext: "Elegance in simplicity." },
];

function Home() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  const revealRefs = useMemo(() => [headingRef, paraRef], []);
  const [selectedVideo, setSelectedVideo] = useState("video1");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === headingRef.current && entry.isIntersecting) {
          entry.target.classList.add("transition-fast");
        }

        if (entry.target === paraRef.current && entry.isIntersecting) {
          entry.target.classList.add("transition-slow");
        }
      });
    });

    revealRefs.forEach((ref) => {
      if (ref && ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      revealRefs.forEach((ref) => {
        if (ref && ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [revealRefs]);

  return (
    <>
      <main className="mb-5">
        <Intro />
        <ProductCards />
      </main> 

      {/* Video Player with Tabs */}
      <Container fluid className="d-flex justify-content-center p-0 my-5">
         <VideoPlayer
              publicId="7228719a-4d7f-4452-950b-b8f9ba407612_h8abdu"
              id="video-player"
              active={selectedVideo === "video1"}  
              key={selectedVideo} 
            />
      </Container>

      <Container>
        <Col className="text-center" style={{ marginTop: "110px" }}>
          <img alt="" src={Logo} width="165" height="33" className="d-inline-block align-top" />{" "}
        </Col>
        <Col style={{ height: "300px" }}>
          <div className="text-center">
            <h1
              className="mt-5 mb-2 fw-lighter display-6"
              style={{ fontSize: "70px" }}
              ref={headingRef}
            >
              Our Story
            </h1>
            <p className="fw-lighter fs-5 mt-3" ref={paraRef}>
              Visit our About page to learn more about our journey, our passion for sound, and our
              dedication to sustainability{" "}
            </p>
            <Link to={"/about"}>
              <Button
                className="btn-rounded wide"
                variant="outline-secondary"
                style={{ marginTop: "15px" }}
                onClick={() => window.scrollTo(0, 0)}
              >
                About Us
              </Button>{" "}
            </Link>
          </div>
        </Col>
      </Container>

      <div className="bg-custom-color-grey">
        <Container className="mt-5">
          <Row>
            <Col lg={7} sm={12} md={12} className="px-0 d-none d-lg-block">
              <img
                src={EndImage}
                alt=""
                className="img-fluid object-fit-cover"
                style={{ height: "100%", maxHeight: "600px" }}
              />
            </Col>
            <Col lg={7} sm={12} md={12} className="px-0 d-block d-lg-none">
              <img
                src={EndImage}
                alt=""
                className="img-fluid object-fit-cover"
                style={{ height: "50vh", maxHeight: "600px" }}
              />
            </Col>
            <Col lg={5} sm={12} className="p-5">
              <h5 className="mt-2 pl-5 text-end display-3 fw-bold">Additional Services</h5>
              <p className="pl-5 text-end fw-lighter fs-5">
                At Sonicbeats, we specialize in a range of custom-made sound-related products
                designed to meet your unique needs. Whether you are looking for bespoke home audio
                systems, professional installations, or personalized sound solutions, our team is
                dedicated to delivering exceptional quality and innovative design.
              </p>
              <div className="pl-5 text-end">
                <Link to="/additional-services" className="text-decoration-none">
                  <Button
                    className="btn-rounded wide"
                    variant="outline-secondary"
                    style={{ marginTop: "15px" }}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Learn More
                  </Button>{" "}
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mt-5 mb-5">
        <ExpandingCards images={images} />
      </Container>

      {/* <Container fluid className="text-center mb-5">
        <Row>
             <VideoPlayer
              publicId="7228719a-4d7f-4452-950b-b8f9ba407612_h8abdu"
              id="video-player"
              active={selectedVideo === "video1"}  
              key={selectedVideo} 
            />
      </Row>
      </Container> */}
    </>
  );
}

export default Home;
