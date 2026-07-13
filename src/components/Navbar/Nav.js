import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Nav.css";
import Logo from "../../assets/jpeg/Logo2.jpeg";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import preloadImages from "./LoadImages";
import Cart from "../../assets/svg/cart3.svg";

const cacheImagesAsync = async (images) => {
  const imagePromises = images.map((url) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = url;
      image.onload = () => resolve();
      image.onerror = () => reject();
    });
  });

  try {
    await Promise.all(imagePromises);
  } catch (error) {
    console.error("Error preloading images", error);
  }
};

function NavRounded() {
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => {
    if (!isPreloaded) {
      cacheImagesAsync(preloadImages).then(() => {
        setIsPreloaded(true);
      });
    }
  };

  useEffect(() => {
    let previousScrollY = window.scrollY;
    const nav = document.getElementById("nav");

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // CLOSE NAVBAR IF OPEN (mobile)
      if (expanded) setExpanded(false);

      // HIDE ON SCROLL DOWN, SHOW ON SCROLL UP
      if (currentScroll > previousScrollY && currentScroll > 20) {
        nav.style.top = "-100px";  
      } else {
        nav.style.top = "10px";    
      }

      previousScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [expanded]);

  return (
    <Navbar
      id="nav"
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="navbar-nav mx-auto nav-rounded pb-2"
      style={{
        position: "fixed",
        top: "10px",
        left: 0,
        right: 0,
        transition: "top 0.35s ease-in-out",
        zIndex: 9999,
      }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={Logo}
            width="190"
            height="35"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto mt-1">
            <Link
              className="nav-link mx-2"
              to="/"
              onClick={() => {
                window.scrollTo(0, 0);
                setExpanded(false);
              }}
            >
              Home
            </Link>

            <Link
              className="nav-link mx-2"
              to="/about"
              onClick={() => {
                window.scrollTo(0, 0);
                setExpanded(false);
              }}
            >
              About
            </Link>

            <Link
              className="nav-link mx-2"
              to="/gallery"
              onClick={() => {
                window.scrollTo(0, 0);
                setExpanded(false);
              }}
              onMouseEnter={handleMouseEnter}
            >
              Gallery
            </Link>

            <Link
              className="nav-link mx-2"
              to="/additional-services"
              onClick={() => {
                window.scrollTo(0, 0);
                setExpanded(false);
              }}
            >
              Services
            </Link>
          </Nav>

          <Link
            className="d-none d-md-none d-lg-block"
            to={"/shop"}
            onClick={() => {
              window.scrollTo(0, 0);
              setExpanded(false);
            }}
          >
            <Button
              className="btn-rounded mx-2 px-4"
              variant="outline-primary"
              style={{ left: "-10px" }}
            >
              Shop
            </Button>
          </Link>

          <Link
            className="mx-3 d-none d-md-none d-lg-block"
            to={"/request-product"}
            onClick={() => {
              window.scrollTo(0, 0);
              setExpanded(false);
            }}
          >
            <Button className="btn-rounded px-3" variant="outline-primary">
              Custom
            </Button>
          </Link>

          <Link
            className="mx-2 d-none d-md-none d-lg-block"
            to={"/cart"}
            onClick={() => {
              window.scrollTo(0, 0);
              setExpanded(false);
            }}
          >
            <Button
              className="btn-rounded d-flex align-items-center justify-content-center p-2"
              variant="primary"
            >
              <img alt="" src={Cart} width="18" height="18" />
            </Button>
          </Link>

          {/* MOBILE MENU — secondary actions */}
          <div className="d-block d-lg-none sb-mobile-actions">
            <Link
              className="d-block text-decoration-none nav-link"
              to={"/shop"}
              onClick={() => {
                window.scrollTo(0, 0);
                setExpanded(false);
              }}
            >
              Shop
            </Link>

            <Link
              className="d-block text-decoration-none nav-link"
              to={"/request-product"}
              onClick={() => {
                window.scrollTo(0, 0);
                setExpanded(false);
              }}
            >
              Request custom
            </Link>

            <Link
              className="d-block text-decoration-none mt-3"
              to={"/cart"}
              onClick={() => {
                window.scrollTo(0, 0);
                setExpanded(false);
              }}
            >
              <Button
                className="btn-rounded w-100 d-flex align-items-center justify-content-center gap-2 py-2"
                variant="primary"
              >
                <img
                  alt=""
                  src={Cart}
                  width="17"
                  height="17"
                  style={{ filter: "invert(1)" }}
                />
                View cart
              </Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavRounded;
