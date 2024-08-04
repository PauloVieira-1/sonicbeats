import { Container } from "react-bootstrap";
import "./Gallery.css";
import { useState } from "react";

function GalleryImage({ imageName, children, id, ...props }) {
  
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };  

  return (
    <Container className="p-0 main-container" onClick={() => handleClick()}>
      <div className= {`img-custom ${isFlipped ? 'flip' : ''}`} id={`flip-img ${id}`}>
        <div
          style={{ height: "400px", width: "100%" }}
          className="d-flex gap-2 bg-custom-color-grey img-front"
        >
          <img
            alt=""
            className="h-100 w-100 img-front img-effect"
            src={imageName}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="img-back bg-custom-color-grey-2">
          <div className="text-center d-flex flex-column justify-content-center align-items-center p-5 ">
            <h3 className="fw-bold text-align-center mt-5">{children}</h3>
            <h5 className="fw-lighter mt-2">{props.subHeading}</h5>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default GalleryImage;
