import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabButton from '../ProductCards/TabButton';
import './ProductCards.css'


function ProductCards() {
    return (
        <Container className='mt-5'>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={12}>
            <h2>Our Speaker Selection</h2>
            <p>Explore our collection of past speaker models. Each product is unique, 
                offering distinctive features and quality sound. While these models 
                showcase our past innovations, you can place orders for customized, individual 
                speakers tailored to your specific needs.
            </p>
        </Col>
        <Col xs={6} md={4}>

        </Col>
      </Row>
      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row className='mt-3'>
        <Col xs={12} md={3}>
          <TabButton>Product 1</TabButton>
        </Col>
        <Col xs={12} md={3}>
          <TabButton>Product 1</TabButton>
        </Col>
        <Col xs={12} md={3}>
          <TabButton>Product 1</TabButton>
        </Col>
        <Col xs={12} md={3}>
          <TabButton>Product 1</TabButton>
        </Col>

      </Row>
    </Container>

    )

}

export default ProductCards