import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';


function About() {
    return (
        <div className='bg-custom-color-grey p-3 mt-5'>
        <Container className='my-5' > 
            <Row>
                <Col className='text-center'>
                    <h1 className='fw-bold display-3'>About Us</h1>
                    <h3 className='fw-lighter mt-3'>Where Sound Meets Craftsmanship</h3>
                </Col>
            </Row>
        </Container>

        </div>
    )
}

export default About