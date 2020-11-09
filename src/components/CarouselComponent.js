import React from "react";
import { Carousel } from "react-bootstrap";

export default function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dkrcosw87/image/upload/v1604892101/banners/4_s4w0ah.png"
          alt="First slide"
        />
        <Carousel.Caption style={{ "background-color": "#0B0633" }}>
          <h1>Podemos ayudarte</h1>
          <p>No estás solo/a. Da el paso</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dkrcosw87/image/upload/v1604892108/banners/3_drhgej.png"
          alt="Third slide"
        />

        <Carousel.Caption style={{ "background-color": "#0B0633" }}>
          <h1>Nos importan las personas</h1>
          <p>
            Sabemos que en estos momentos lo que más necesita es una mano amiga.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dkrcosw87/image/upload/v1604892107/banners/2_fyeyrn.png"
          alt="Third slide"
        />

        <Carousel.Caption style={{ "background-color": "#0B0633" }}>
          <h1>Lo único imposible es aquello que no intentas</h1>
          <p>
            Estamos llenos de buenas razones para que la historia de quienes más
            queremos continúe...
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
