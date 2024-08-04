import Button from "react-bootstrap/Button";

function GalleryText({ children, ...props }) {
  let button = null;

  if (props.button) {
    button = (
      <Button
        className="btn-rounded wide"
        variant="outline-secondary"
        style={{ marginTop: "80px", width: "70%" }}
      >
        Learn More
      </Button>
    );
  }

  return (
    <>
      <div
        style={{ minHeight: "400px" }}
        className="text-center d-flex flex-column justify-content-center align-items-center bg-custom-color-grey p-5 rounded-4"
      >
        <h3 className="fw-bold text-align-center mt-5">{children}</h3>
        <h5 className="fw-lighter mt-2">{props.subHeading}</h5>
        {button}
      </div>
    </>
  );
}

export default GalleryText;
