import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Product1 from "../../assets/jpeg/carousel-image-1.jpeg";
import Product2 from "../../assets/jpeg/carousel-image-2.jpeg";
import Product3 from "../../assets/jpeg/Product4.JPG";
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
          <Carousel.Caption style={{ textAlign: "left" }}>
            <h3>Infinity</h3>
            <p>
              A name that embodies timeless elegance and boundless possibilities{" "}
              <br />
              in audio excellence. Limited Availability.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="c-item">
          <Carousel.Caption style={{ textAlign: "left" }}>
            <h3>Little Men</h3>
            <p>
              A compact powerhouse that defies its size, delivering impressive{" "}
              <br />
              sound quality in a sleek, portable design.
            </p>
          </Carousel.Caption>
          <img
            src={Product2}
            className="img-fluid c-img"
            alt="Second slide"
          ></img>
        </Carousel.Item>
        <Carousel.Item className="c-item">
          <img
            src={Product3}
            className="img-fluid c-img"
            alt="Third slide"
          ></img>
          <Carousel.Caption style={{ textAlign: "left" }}>
            <h3>Donnager</h3>
            <p>
              Meaning "Great" or "Powerful" in old German, this sspeaker delivers a sound that equals its name.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
