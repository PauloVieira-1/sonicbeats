import "./Timeline.css";
import { Container, Row, Col } from "react-bootstrap";
import InfoBox from "./InfoBox";

function Timeline () {
    return (
        <div className="timeline">
            <Container className="">
                <Row>
                    <Col className="text-center p-5 my-2 animation">
                        <InfoBox title="Title" subTitle="Subtitle" description="Description"/>
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col className="text-center p-5 my-2 animation">
                    <InfoBox title="Title" subTitle="Subtitle" description="Description"/>

                    </Col>
                </Row>
                <Row>
                    <Col className="text-center p-5 my-2 animation">
                    <InfoBox title="Title" subTitle="Subtitle" description="Description"/>

                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                <Col></Col>
                    <Col className="text-center p-5 my-2 animation">
                    <InfoBox title="Title" subTitle="Subtitle" description="Description"/>

                    </Col>
                </Row>
            </Container>
        </div> 
    );
}   

export default Timeline;