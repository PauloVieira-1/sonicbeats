import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Product1 from "../../assets/jpeg/Speakers_two.JPG";
import Product2 from "../../assets/jpeg/tiny2.jpeg";
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
            <h3>Enigma + Blackbox</h3>
            <p>A deisgn philosophy captured in two form factors </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="c-item">
          <Carousel.Caption style={{ textAlign: "left" }}>
            <h3>Tinymen</h3>
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
              Meaning "Thunder" in old German, this speaker
              delivers a sound that equals its name.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
