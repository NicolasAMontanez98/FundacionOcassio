import React from "react";
import CarouselComponent from "../components/CarouselComponent";
import Card from "../components/Card";

export default function Home() {
  const infoObjGeneral = {
    title: "Objetivo general",
    description:
      "Atención integral a la población afectada por el consumo de sustancias psicoactivas, a partir del apoyo y la atención psicosocial proporcionados por la fundacions Ocassio Colombia...",
    someInfo: "Continuar leyendo.",
  };
  const infoMision = {
    title: "Misión",
    description:
      "Brindamos apoyo a la población infantil y adolescente en un rango de 6 a 17 años de edad, que se encuentren cursando  educación básica, y sean consumidores activos de Sustancias Psicoactivas ( SPA ) a través de...",
    someInfo: "Continuar leyendo.",
  };
  const infoVision = {
    title: "Visión",
    description:
      "Para el 2025 queremos ser una organización renombrada y conocida en el ámbito de las rehabilitaciones y la exclusión social, trabajando para mejorar las intervenciones, tanto en prevención como en la rehabilitación...",
    someInfo: "Continuar leyendo.",
  };

  return (
    <div>
      <div className="my-3">
        <CarouselComponent />
      </div>
      <div className="container">
        <h1 className="mt-2">Inicio</h1>
        <hr />
        <div className="row my-2">
          <div className="col-md-12">
            <Card info={infoMision} />
            <img
              width="1110px"
              height="480"
              className="my-2 py-1 px-1"
              src="https://aceleratucarrera.com/wp-content/uploads/2017/12/mitos-sobre-motivaci%C3%B3n-1.jpg"
              title="Intentalo"
              alt="Tú puedes"
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-12">
            <Card info={infoVision} />
            <img
              width="1110px"
              height="803"
              className="my-2 py-1 px-1"
              src="https://sabercompetir.com/wp-content/uploads/2019/02/Motivacion-1024x683.jpg"
              title="Tú puedes"
              alt="Tú puedes"
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-12">
            <Card info={infoObjGeneral} />
            <img
              width="1110px"
              height="580"
              className="my-2 py-1 px-1"
              src="https://static1.squarespace.com/static/5595c56fe4b0f75fd2944465/5596cf20e4b012de4d5d8f2b/5a1d4833e4966b13425f3160/1587483847739/Motivacion.jpg?format=1500w"
              title="Estamos para tí"
              alt="Tú puedes"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
