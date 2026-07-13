import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
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
    <Container className="py-section">
      <div className="text-center mb-5">
        <span className="sb-eyebrow">The collection</span>
        <h2 className="display-5 fw-bold">Three designs. One philosophy.</h2>
      </div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="rounded-4 overflow-hidden shadow"
      >
        <Carousel.Item className="c-item">
          <img
            src={Product1}
            className="img-fluid c-img"
            alt="Enigma and Blackbox speakers"
          />
          <Carousel.Caption style={{ textAlign: "left" }}>
            <h3>Enigma + Blackbox</h3>
            <p>A design philosophy captured in two form factors</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="c-item">
          <img
            src={Product2}
            className="img-fluid c-img"
            alt="Tinymen compact speakers"
          />
          <Carousel.Caption style={{ textAlign: "left" }}>
            <h3>Tinymen</h3>
            <p>
              A compact powerhouse that defies its size, delivering impressive
              sound quality in a sleek, portable design.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="c-item">
          <img
            src={Product3}
            className="img-fluid c-img"
            alt="Donager speaker"
          />
          <Carousel.Caption style={{ textAlign: "left" }}>
            <h3>Donager</h3>
            <p>
              Meaning "Thunder" in old German, this speaker delivers a sound
              that equals its name.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ImageCarousel;
