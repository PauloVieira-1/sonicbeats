import { Container } from "react-bootstrap";
import "../AdditionalServices/AdditionalServices.css";
function ServiceCard(props) {
  return (
    <Container className="bg-custom-color-grey cardbox rounded-4 p-4 img-effect">
      <div className="cardbox mt-2">
        <img
          src={props.image}
          alt=""
          className="img-fluid my-4 d-flex justify-content-center"
          style={{ height: "110px", width: "100%" }}
        ></img>
        <div className="text-center">
          <h2 className="fw-bold mt-2">{props.title}</h2>
          <p className="card-paragraph">{props.description}</p>
        </div>
      </div>
    </Container>
  );
}
export default ServiceCard;
