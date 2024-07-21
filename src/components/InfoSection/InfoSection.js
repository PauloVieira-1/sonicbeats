import { Container, Row, Col } from 'react-bootstrap';

function InfoSection(props) {
    
    let additionalContent = null;

    if (props.image) {
        additionalContent = <Col md={4} className='p-4 text-center .d-sm-none .d-md-block'>
            <img className='img-fluid rounded-3 border' style={{height: '400px'}} src={props.image} />
            </Col>
    } 

    return (
        <div className='p-1'>
            <Container className= {`my-4 bg-light rounded-4 ${props.shadow ? 'shadow' : ''}`} > 
                <Row>
                    <Col className='p-5'>
                        <h3 className='fw-medium fs-1 mb-'>{props.title}</h3>
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