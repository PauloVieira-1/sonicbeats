import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Nav.css";
import Logo from "../../assets/jpeg/Logo2.jpeg";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import preloadImages from "./LoadImages";
import Cart from "../../assets/svg/cart3.svg";

const cacheImagesAsync = async (images) => {
  const imagePromises = images.map((url) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = url;
      image.onload = () => resolve();
      image.onerror = () => reject();
      console.log("fetching");
    });
  });

  try {
    await Promise.all(imagePromises);
    console.log("All images preloaded");
  } catch (error) {
    console.error("Error preloading images", error);
  }
};

function NavRounded() {
  const [isPreloaded, setIsPreloaded] = useState(false);

  const handleMouseEnter = () => {
    if (!isPreloaded) {
      cacheImagesAsync(preloadImages).then(() => {
        setIsPreloaded(true);
        console.log("Images preloaded on hover.");
      });
    }
  };

  useEffect(() => {
    let previousScroll = window.scrollY;

    const scrollFeature = () => {
      let currentScroll = window.scrollY;
      const navContainer = document.getElementById("nav");

      if (navContainer) {
        if (currentScroll > previousScroll) {
          navContainer.style.top = "-100px";
        } else {
          navContainer.style.top = "10px";
        }
        previousScroll = currentScroll;
      }
    };

    document.addEventListener("scroll", scrollFeature);
  }, []);

  return (
    <Navbar
      id="nav"
      expand="lg"
      className=" navbar-nav mx-auto nav-rounded pb-2"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={Logo}
            width="190"
            height="35"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto mt-1">
            <Link
              className="nav-link mx-2"
              to="/"
              onClick={() => window.scrollTo(0, 0)}
            >
              Home
            </Link>
            <Link
              className="nav-link mx-2"
              to="/about"
              onClick={() => window.scrollTo(0, 0)}
            >
              About
            </Link>
            <Link
              className="nav-link mx-2"
              to="/gallery"
              onClick={() => window.scrollTo(0, 0)}
              onMouseEnter={handleMouseEnter}
            >
              Gallery
            </Link>
            <Link
              className="nav-link mx-2"
              to="/additional-services"
              onClick={() => window.scrollTo(0, 0)}
            >
              Services
            </Link>
          </Nav>
          <Link
            className="d-none d-md-none d-lg-block"
            to={"/shop"}
            onClick={() => window.scrollTo(0, 0)}
          >
            <Button
              className="btn-rounded mx-2 px-4"
              variant="outline-primary"
              style={{ left: "-10px" }}
            >
              Shop
            </Button>{" "}
          </Link>
          <Link
            className="mx-3 d-none d-md-none d-lg-block"
            to={"/request-product"}
            onClick={() => window.scrollTo(0, 0)}
          >
            <Button className="btn-rounded px-3" variant="outline-primary">
              Custom
            </Button>{" "}
          </Link>
          <Link
            className="mx-2 d-none d-md-none d-lg-block "
            to={"/cart"}
            onClick={() => window.scrollTo(0, 0)}
          >
            <Button
              className="btn-rounded d-flex align-items-center justify-content-center p-2"
              variant="primary"
            >
              <img alt="" src={Cart} width="18" height="18" className=""></img>
            </Button>{" "}
          </Link>
          <div className="d-block d-md-block d-lg-none">
            <Link
              className="d-block d-md-block d-lg-none text-decoration-none nav-link mx-2"
              to={"/shop"}
              onClick={() => window.scrollTo(0, 0)}
            >
              Shop
            </Link>
            <Link
              className="mx-2 d-block d-md-block d-lg-none mb-3 text-decoration-none nav-link "
              to={"/request-product"}
              onClick={() => window.scrollTo(0, 0)}
            >
              Request Custom
            </Link>
            <Link
              className="mx-2 d-block d-md-block d-lg-none ms-0"
              to={"/cart"}
              onClick={() => window.scrollTo(0, 0)}
            >
              <Button
                className="btn-rounded d-flex align-items-center justify-content-center px-5 mt-2"
                variant="primary"
              >
                <img
                  alt=""
                  src={Cart}
                  width="18"
                  height="18"
                  className=""
                ></img>
              </Button>{" "}
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavRounded;
