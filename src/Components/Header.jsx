import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Header() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/myslide1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>SUMMER COLLECTION</h3>
          <p>Fresh style for a better you</p>
          <button>Shop Now →</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/myslide2.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>NEW ARRIVALS</h3>
          <p>Discover our latest bags</p>
          <button>Shop Now →</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/slide3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>OUR COLLECTION</h3>
          <p>Elegance for every occasion</p>
          <button>Shop Now →</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;