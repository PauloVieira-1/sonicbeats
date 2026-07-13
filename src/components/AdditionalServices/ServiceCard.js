import "../AdditionalServices/AdditionalServices.css";

function ServiceCard(props) {
  return (
    <div className="bg-custom-color-grey-2 rounded-4 p-4 h-100 img-effect">
      <div className="sb-service-icon mb-4">
        <img src={props.image} alt="" />
      </div>
      <h5 className="fw-bold">{props.title}</h5>
      <p className="text-muted small mb-0 mt-2">{props.description}</p>
    </div>
  );
}

export default ServiceCard;
