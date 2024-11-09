import { Card } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import './Product.css'



function ProductItem(props) {

    return (
        <Card className="mx-3 my-3 img-effect" style={{ width: '25rem' }}>
        <Card.Img variant="top" src={props.image} className="img-fluid" style={{height: "100%", minWidth: "100%", maxHeight: "300px", objectFit: "cover"}}/>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
                {props.description}
          </Card.Text>
          <ListGroup className="list-group-flush my-4">
        <ListGroup.Item>{props.spec1}</ListGroup.Item>
        <ListGroup.Item>{props.spec2}</ListGroup.Item>
        <ListGroup.Item>{props.spec3}</ListGroup.Item>
      </ListGroup>
          <Button variant="primary" className="rounded-5 px-4">Add to Cart</Button>
        </Card.Body>
      </Card>

    )
}

export default ProductItem