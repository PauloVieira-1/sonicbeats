import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Nav.css";
import Logo from "../../assets/svg/Logo.svg";
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
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Soniccraft
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
            <NavDropdown
              title="Learn More"
              id="basic-nav-dropdown"
              className="nav-link"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Additional Services
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link className="mx-3 d-none d-md-none d-lg-block" href="#home">
            <Link to={"/request-product"}>
              <Button className="btn-rounded" variant="outline-primary">
                Request Product
              </Button>{" "}
            </Link>
          </Nav.Link>
          <Nav.Link className="mx-0 d-md-block d-lg-none mt-4" href="#home">
            <Link to={"/request-product"}>
              <Button className="btn-rounded" variant="outline-primary" style={{ left: "-10px"}}>
                Request Product
              </Button>{" "}
            </Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavRounded;
