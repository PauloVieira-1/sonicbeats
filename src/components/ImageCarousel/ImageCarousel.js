import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Product1 from "../../assets/jpeg/carousel-image-1.jpeg";
import Product2 from "../../assets/jpeg/carousel-image-2.jpeg";
import Product3 from "../../assets/jpeg/carousel-image-3.jpeg";
import "../ImageCarousel/ImageCarousel.css";

function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="mt-3">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="c-item">
          <img
            src={Product1}
            className="img-fluid c-img"
            alt="First slide"
          ></img>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="c-item">
          <img
            src={Product2}
            className="img-fluid c-img"
            alt="Second slide"
          ></img>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="c-item">
          <img
            src={Product3}
            className="img-fluid c-img"
            alt="Third slide"
          ></img>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
