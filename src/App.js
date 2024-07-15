import NavRounded from "../src/components/Navbar/Nav"
import Intro from "../src/components/Intro/Intro"
import ProductCards from "./components/ProductCards/ProductCards"
import Footer from "../src/components/Footer/Footer"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.css'
import '../src/styles/colors.css'
import './styles/Global.css'
import EndImage from '../src/assets/End-Image.png'


function App() {
  return (
    <>
      <NavRounded />
      <main>
        <Intro /> 
        <ProductCards />
      </main>
      <div className="bg-custom-color-grey">
        <Container className="mt-5">
          <Row>
            <Col xs={7}>
              <img src={EndImage} alt="" className="img-fluid"/> 
            </Col>
            <Col xs={5} className="p-5">
              <h2 className="mt-5 pl-5 text-end display-3 fw-bold">Additional Services</h2>
              <p className="pl-5 text-end fw-lighter fs-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              </p>
              <div className="pl-5 text-end">
                <Button className="btn-rounded wide" variant='outline-secondary' style={{marginTop: '15px'}}>Learn More</Button>{' '}
              </div>
            </Col>
          </Row>
       </Container>
      </div>
      <Footer />
    </>
  )
}

export default App;
