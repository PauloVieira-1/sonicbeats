import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

import Logo from "../../assets/jpeg/Logo2.jpeg";
import Instagram from "../../assets/svg/instagram.svg";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Services", to: "/additional-services" },
  { label: "Shop", to: "/shop" },
  { label: "Custom", to: "/request-product" },
];

function Footer() {
  return (
    <footer className="sb-footer mt-5">
      <Container className="pt-5 pb-4">
        <Row className="pt-3 pb-4">
          <Col className="text-center">
            <img
              alt="SonicBeats"
              src={Logo}
              width="170"
              height="32"
              className="sb-footer-logo d-inline-block"
            />
            <p className="mt-3 mb-0 fw-light">
              Handcrafted sound. Sustainable by design.
            </p>
          </Col>
        </Row>

        <Row className="pb-4">
          <Col className="d-flex justify-content-center flex-wrap gap-4">
            {footerLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="sb-footer-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                {label}
              </Link>
            ))}
          </Col>
        </Row>

        <Row className="pb-4">
          <Col className="d-flex justify-content-center">
            <span
              className="sb-footer-social"
              role="link"
              aria-label="SonicBeats on Instagram"
              tabIndex={0}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/sonicbeats_official?igsh=d25qOXRlem41NWYw",
                  "_blank",
                )
              }
              onKeyDown={(e) =>
                e.key === "Enter" &&
                window.open(
                  "https://www.instagram.com/sonicbeats_official?igsh=d25qOXRlem41NWYw",
                  "_blank",
                )
              }
            >
              <img
                src={Instagram}
                width="18"
                height="18"
                className="recolor-image"
                alt=""
              />
            </span>
          </Col>
        </Row>

        <hr className="sb-footer-divider" />

        <Row className="pt-4 gy-2 align-items-center">
          <Col
            xs={12}
            md={4}
            className="text-center text-md-start sb-footer-fineprint"
          >
            © {new Date().getFullYear()} SonicBeats. All rights reserved.
          </Col>
          <Col xs={12} md={4} className="text-center">
            <a href="mailto:designed@sonicbeats.nl" className="sb-footer-mail">
              designed@sonicbeats.nl
            </a>
          </Col>
          <Col xs={12} md={4} className="text-center text-md-end">
            <span
              className="sb-footer-link"
              role="button"
              tabIndex={0}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            >
              Back to top ↑
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
