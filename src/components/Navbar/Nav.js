import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css'
import Logo from '../../assets/Logo.svg'
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

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
        <Link className="nav-link" to='/'>
          <Navbar.Brand href="#home">
          <img
                alt=""
                src= {Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            Soniccraft
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href='/'><Link className="nav-link" to='/'>Home</Link></Nav.Link>
            <Nav.Link href='/'><Link className="nav-link" to='/about'>About</Link></Nav.Link>
            <Nav.Link href='/'><Link className="nav-link" to='/'>Gallery</Link></Nav.Link>
            <NavDropdown title="Learn More" id="basic-nav-dropdown" className='nav-link'>
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
            <Button className="btn-rounded" variant='outline-primary'>Request Product</Button>{' '}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavRounded;