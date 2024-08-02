import Intro from "../Intro/Intro";
import ProductCards from "../ProductCards/ProductCards";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "../../styles/colors.css";
import "../../styles/Global.css";
import EndImage from "../../assets/png/End-Image.png";
import Logo from "../../assets/svg/Logo.svg";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Home() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  const revealRefs = [headingRef, paraRef];

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
  }, []);

  return (
    <>
      <main>
        <Intro />
        <ProductCards />
      </main>
      <Container>
        <Col className="text-center" style={{ marginTop: "110px" }}>
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Soniccraft
        </Col>
        <Col style={{ height: "300px", marginTop: "px" }}>
          <div className="text-center">
            <h1
              className="mt-5 mb-2 fw-lighter display-6"
              style={{ fontSize: "70px" }}
              ref={headingRef}
            >
              Our Story
            </h1>
            <p className="fw-lighter fs-5 mt-3" ref={paraRef}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
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
            <Col lg={7} sm={12} md={12} className="px-0">
              <img
                src={EndImage}
                alt=""
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </Col>
            <Col lg={5} sm={12} className="p-5">
              <h2 className="mt-5 pl-5 text-end display-3 fw-bold">
                Additional Services
              </h2>
              <p className="pl-5 text-end fw-lighter fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor
              </p>
              <div className="pl-5 text-end">
                <Button
                  className="btn-rounded wide"
                  variant="outline-secondary"
                  style={{ marginTop: "15px" }}
                >
                  Learn More
                </Button>{" "}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
