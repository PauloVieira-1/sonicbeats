import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
import Logo from '../../assets/Logo.svg'
import Facebook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter-x.svg'
function Footer() {
    return (
        <div className='bg-light'>
            <Container className="mt-4"> 
                <Row className='p-3'>
                    <Col className="d-flex justify-content-center">
                        <Button className="btn-rounded wide" variant="outline-primary" onClick={() => window.scrollTo(0, 0)}>Back to Top</Button>
                    </Col>
                </Row>
                <div className="footer">
                    <Row className='p-3'>
                        <Col className="text-center">
                            <img
                                alt=""
                                src= {Logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Soniccraft
                        </Col>
                    </Row>
                    <Row className='text-center'>
                        <Col className="d-flex justify-content-center m-3">
                            <img src={Instagram}
                             width="25"
                             height="25"
                             className='mx-3'
                              onClick={() => window.open('https://www.instagram.com/sonicbeats.nl/', '_blank')}></img>
                            <img src={Facebook}
                            width="25"
                            height="25"
                            className='mx-3'
                            ></img>
                            <img src={Twitter}
                            width="25"
                            height="25"
                            className='mx-3'
                            ></img>
                        </Col>
                    </Row>
                    <p className="text-center mt-3">© 2023 Soniccraft. All rights reserved.</p>
                </div>
            </Container>
        </div>
    );
}

export default Footer