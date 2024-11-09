import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Nav.css";
import Logo from "../../assets/jpeg/Logo2.jpeg";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function NavRounded() {
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
    <Navbar id="nav" expand="lg" className=" navbar-nav mx-auto nav-rounded">
      <Container>
        <Link className="nav-link" to="/">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="190"
              height="35"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="/">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </Nav.Link>
            <Nav.Link href="/">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </Nav.Link>
            <Nav.Link href="/">
              <Link className="nav-link" to="/additional-services">
                Additional Services
              </Link>
            </Nav.Link>
          </Nav>
          <Nav.Link className="d-none d-md-none d-lg-block" href="#home">
            <Link to={"/shop"}>
              <Button className="btn-rounded mx-1 px-5" variant="outline-primary" style={{ left: "-10px"}}>
                Shop
              </Button>{" "}
            </Link>
            </Nav.Link>
            <Nav.Link className="mx-3 d-none d-md-none d-lg-block" href="#home">
            <Link to={"/request-product"}>
              <Button className="btn-rounded" variant="outline-primary">
                Request Custom
              </Button>{" "}
            </Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavRounded;
