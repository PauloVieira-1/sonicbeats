import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Intro.css'
import introImage from '../../assets/Intro-Image.png'
import Button from 'react-bootstrap/Button';

function Intro() {
    return (
        <>
            <Container id='intro'>
                <Row className='mt-5'>
                    <Col lg={5} sm={12}>
                        <h1 className='fw-bold display-3 transition-fast'>Where Sound Meets Craftsmanship.</h1>
                        <div className='transition-slow'>
                            <p className='lead mt-4 fw-light'>
                                Crafting Superior Sound Since 2010. Explore our meticulously handmade speakers, 
                                designed to deliver unparalleled audio quality and timeless craftsmanship. 
                                Elevate your listening experience with Soniccraft.
                            </p>
                            <Button className="btn-rounded d-none d-md-none d-lg-block" variant='outline-primary' style={{marginTop: '15px'}}>Discover Projects</Button>{' '}
                        </div>
                    </Col>
                    <Col lg={7} sm={12} className='text-center'>
                        <img 
                            src={introImage}  
                            alt="intro" 
                            className='img-fluid'
                        ></img>
                    </Col>
                </Row>
            </Container>
        </>
  );
}

export default Intro