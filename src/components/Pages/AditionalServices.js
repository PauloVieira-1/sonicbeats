import { Container, Row, Col, Image } from "react-bootstrap";
import ServiceCard from "../AdditionalServices/ServiceCard";
import Speaker from "../../assets/svg/speaker-fill.svg"
import Gear from "../../assets/svg/gear-wide-connected.svg"
import Note from "../../assets/svg/music-note-list.svg"
import Tools from "../../assets/svg/tools.svg"

import image from  '../../assets/GalleryImages/Train.JPG'
function AdditionalServices() {
    return (
        <Container className="my-5">
            <Row>
                <Col xs={12} md={5} className="pe-5">
                    <h1 className=" display-3 me-4 fw-bold">Our services</h1>
                    <p className="me-4">At Sonicbeats, we offer a range of additional services to elevate your audio experience. Our expert team 
                        is dedicated to delivering seamless installations tailored to your space, ensuring every speaker performs 
                        at its best. 
</p>
                <Image src={image} className="border" fluid style={{height: "100%", minWidth: "100%", maxHeight: "550px", objectFit: "cover"}}/>
                </Col>
                <Col md={7} >
                    <Row className="my-2">
                        <Col xs={12} md={6}>
                            <ServiceCard image={Speaker}
                            title = "Speaker Installation"
                            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                        </Col>
                        <Col>
                        <ServiceCard image={Gear}
                        title = "Tunning"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                        </Col>
                    </Row>
                    <Row className="my-4">
                    <Col xs={12} md={6}>
                        <ServiceCard image={Note}
                        title = "Custom Builds"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                        </Col>
                        <Col>
                        <ServiceCard image={Tools}
                        title = "Speaker Repair"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}   

export default AdditionalServices