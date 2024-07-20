import { Container, Row, Col } from 'react-bootstrap';
import InfoSection from '../InfoSection/InfoSection';
import VerticalImage from '../../assets/Vertical.jpeg'

function About() {
    return (
        <>
            <div className='bg-custom-color-grey p-3 mt-5'>
                <Container className='my-3' > 
                    <Row>
                        <Col className='text-center'>
                            <h1 className='fw-bold display-3'>About Us</h1>
                            <h3 className='fw-lighter mt-3'>Where Sound Meets Craftsmanship</h3>
                        </Col>
                    </Row>
                </Container>    
            </div>   
            <main>
                <InfoSection 
                title = {'Our Story'}
                heading = {'Passion for Sound, Commitment to Sustainability'}
                content = {'At Artisan Sound, we believe that great sound should come with a great story. Our journey began with a passion for music and a commitment to sustainability. Each of our bespoke speakers is crafted from the finest materials, including our signature recycled Eik wood, ensuring not only exceptional sound quality but also a positive impact on the environment.'}
                shadow = {true}
                image = {VerticalImage}
                />
            </main>     
        </>
    )
}

export default About