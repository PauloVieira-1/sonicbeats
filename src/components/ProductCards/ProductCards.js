import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabButton from '../ProductCards/TabButton';
import './ProductCards.css'
import { ProductExamples } from './ProductExampls';
import { Card } from 'react-bootstrap';


function ProductCards() {
    
    const [product, setProduct] = useState("Product1")
    function handleSelect(product){
        setProduct(product)
    }
  
    return (
        <Container className='mt-5 bg-light p-4 rounded-5 shadow'>
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
      <Row className='mt-3'>
        <Col xs={12} md={3}>
          <TabButton isActive={product === "Product1"} onSelect={() => handleSelect("Product1")}>Product 1</TabButton>
        </Col>
        <Col xs={12} md={3}>
          <TabButton isActive={product === "Product2"} onSelect={() => handleSelect("Product2")}>Product 2</TabButton>
        </Col>
        <Col xs={12} md={3}>
          <TabButton isActive={product === "Product3"} onSelect={() =>handleSelect("Product3")}>Product 3</TabButton>
        </Col>
        <Col xs={12} md={3}>
          <TabButton isActive={product === "Product4"} onSelect={() => handleSelect("Product4")}>Product 4</TabButton>
        </Col>
      </Row>
      <Row>
        <div className='mt-4 mb-5'>
          <Card>
            <Card.Img variant="top" src={ProductExamples[product].image}/>
            <Card.Body>
              <Card.Title>{ProductExamples[product].title}</Card.Title>
              <Card.Text>
                {ProductExamples[product].description}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>

    )

}

export default ProductCards