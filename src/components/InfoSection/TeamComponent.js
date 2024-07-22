import { Container, Row, Col } from 'react-bootstrap';
import ExampleImage from '../../assets/Vertical.jpeg'
import Card from 'react-bootstrap/Card';


function TeamComponent (props) {
    return (
        <>
            <Container style={{minHeight: '400px', zIndex: '0'}} className= {`mt-3 mb-5 bg-secondary rounded-4 ${props.shadow ? 'shadow' : ''} ${props.active ? 'transition-down' : ''}`} > 
                <Row>
                    <Col className='p-4'>
                    <Card className="bg-dark text-white">
                        <Card.Img src={ExampleImage} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col className='p-4'>
                        <Card className="bg-dark text-white">
                            <Card.Img src={ExampleImage} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col className='p-4'>
                    <Card className="bg-dark text-white">
                        <Card.Img src={ExampleImage} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>  
        </>
    )
}       

export default TeamComponent