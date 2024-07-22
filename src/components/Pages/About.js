import { Container, Row, Col } from 'react-bootstrap';
import InfoSection from '../InfoSection/InfoSection';
import VerticalImage from '../../assets/Vertical.jpeg'
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import TeamComponent from '../InfoSection/TeamComponent';
import { useRef, useState } from 'react';

function About() {
    

    const DiscoverTeamRef = useRef();

    const [teamActive, setTeamActive] = useState(false);
    function handleSelect() {
        setTeamActive(!teamActive);
    }

    let teamComponent = null

    if (teamActive) {
        teamComponent = <TeamComponent shadow={true} active={teamActive}/>
    }
    
    return (
        <>
            <div className=' p-3 mt-5'>
                <Container className='my-3' > 
                    <Row>
                        <Col className='text-center'>
                            <h1 className='fw-bold display-3'>About Us</h1>
                            <h3 className='fw-lighter mt-3'>Where Sound Meets Craftsmanship</h3>
                        </Col>
                    </Row>
                </Container>    
            </div>   
            <main >
                <div className='my-5' style={{zIndex: '100'}}> 
                    <InfoSection 
                        title = {'Our Story'}
                        heading = {'Passion for Sound, Commitment to Sustainability'}
                        content = {'At Artisan Sound, we believe that great sound should come with a great story. Our journey began with a passion for music and a commitment to sustainability. Each of our bespoke speakers is crafted from the finest materials, including our signature recycled Eik wood, ensuring not only exceptional sound quality but also a positive impact on the environment.'}
                        shadow = {true}
                        image = {VerticalImage}
                        button = {true}
                        ref = {DiscoverTeamRef}
                        onSelect = {handleSelect}
                        active = {teamActive}
                    />
                </div>
                {teamComponent}
                <InfoSection
                    title = {'Our Mission'}
                    heading = {'Innovation Meets Tradition'}
                    content = {'Our mission is to blend innovative technology with traditional craftsmanship to create speakers that deliver unparalleled audio experiences. We strive to push the boundaries of sound engineering while honoring the timeless beauty of natural materials. Every Artisan Sound speaker is a testament to meticulous craftsmanship. Our team of skilled artisans handcrafts each unit with precision and care, ensuring that every detail meets our exacting standards. From the rich, warm tones of our oakwood to the cutting-edge Bluetooth 5.0 technology, our speakers are designed to impress both the eyes and ears.'}
                />
                <InfoSection 
                    title = {'Commitment to Sustainability'}
                    heading = {'Eco-Friendly Excellence'}
                    content = {'Our team is a diverse group of audio engineers, designers, and craftsmen, all united by a shared love of music and dedication to quality. Meet the people behind the sound and discover the passion and expertise that go into every Artisan Sound speaker.'}
                />
                <ImageCarousel />
            </main>     
        </>
    )
}

export default About