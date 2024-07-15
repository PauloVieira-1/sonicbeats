import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
function Footer() {
    return (
        <div className='bg-light'>
            <Container className="mt-4"> 
                <Row className='p-3'>
                    <Col className="d-flex justify-content-center">
                        <Button className="btn-rounded wide" variant="outline-primary">Back to Top</Button>
                    </Col>
                </Row>
                <div className="footer">
                    <p className="text-center">© 2023 Soniccraft. All rights reserved.</p>
                </div>
            </Container>
        </div>
    );
}

export default Footer