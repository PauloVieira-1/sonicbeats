import { Container, Row, Col } from 'react-bootstrap';

function InfoSection(props) {
    
    let additionalContent = null;

    if (props.image) {
        additionalContent = <Col xs={4} md={4} className='p-4 text-center'>
            <img className='img-fluid rounded-3 border' style={{height: '400px'}} src={props.image} />
            </Col>
    } 

    return (
        <div className='p-3 mt-2'>
            <Container className= {`my-5 bg-light rounded-4 ${props.shadow ? 'shadow' : ''}`} > 
                <Row>
                    <Col className='p-4'>
                        <h3 className='fw-medium fs-1'>{props.title}</h3>
                        <h5 className='fw-lighter mt-3'>{props.heading}</h5>
                        <p>{props.content}</p>
                    </Col>
                    {additionalContent}
                </Row>
            </Container>    
        </div>
    )
}       

export default InfoSection