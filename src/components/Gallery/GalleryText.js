import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function GalleryText({ children, ...props }) {
  let button = null;

  if (props.button) {
    button = (
      <Link to={`/${props.page}`} className="text-decoration-none">
        <Button
          className="btn-rounded wide"
          variant="outline-secondary"
          style={{ width: "100%" }}
        >
          Learn More
        </Button>
      </Link>
      
    );
  }

  return (
    <>
      <div
        style={{ minHeight: "400px" }}
        className="text-center d-flex flex-column justify-content-center align-items-center bg-custom-color-grey p-5 rounded-4"
      >
        <h3 className="fw-bold text-align-center mt-5">{children}</h3>
        <h5 className="fw-lighter mt-2 mb-5">{props.subHeading}</h5>
        {button}
      </div>
    </>
  );
}

export default GalleryText;
