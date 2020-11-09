import React from "react";
import Card from "../components/Card";

export default function Services() {
  const infon = {
    title: "Some card",
    description:
      "Lorem Ipsum dolor sit amet, consectetur adipiscing elit amet consectetur adipiscing",
    someInfo: "11 - 2020",
  };
  const infoNormaBas = {
    title: "Normatividad básica",
    description:
      "DECRETO 427 DE 1996: este decreto se encarga de regular todos los procesos y trámites de las entidades sin ánimo de lucro, en el artículo dos número 21 dice que nuestra entidad puede hacer: rehabilitación social y ayuda a indigentes, drogadictos e incapacitados, esto nos ayuda y encaja con nuestra principal actividad.",
    someInfo: "11 - 2020",
  };
  const infoPobDiri = {
    title: "Población dirigida",
    description:
      "Va dirigido a niños,niñas y adolescentes de los 6 a los 16 años, de la ciudad de Bogotá que tengan problemas de drogadicción, y requieran apoyo para salir de esto.",
    someInfo: "11 - 2020",
  };
  const infoIni = {
    title: "Justificación",
    description:
      "Nuestro objetivo principal es ayudar a los niños entre 6 a 16 años que tienen una dependencia a las drogas con el fin de mostrarles una alternativa, desarrollando proyectos de vida donde se encuentren a gusto y lleguen a lograr sus sueños y proyectos, disminuyendo así la cifra de niños drogadictos en el país",
    someInfo: "11 - 2020",
  };
  return (
    <div className="container">
      <h1 className="mt-4">Servicios</h1>
      <hr />
      <div className="row my-2">
        <div className="col-md-12">
          <Card info={infoIni} />
        </div>
      </div>
      {/* <div className="row my-2">
        <div className="col-md-12">
          <div className="list-group">
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Cras justo odio
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Dapibus ac facilisis in
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Morbi leo risus
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Porta ac consectetur ac
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Vestibulum at eros
            </button>
          </div>
        </div>
      </div> */}
      <div className="row my-2">
        <div className="col-md-12">
          <img
            alt="Población dirigida"
            title="Población dirigida"
            width="1110px"
            height="370px"
            src="https://eacnur.org/blog/wp-content/uploads/2017/07/mundo-de-los-ni%C3%B1os_opt-800x400.jpg"
          />
        </div>
      </div>
      <div className="row my-2">
        <div className="col-md-12">
          <Card info={infoPobDiri} />
        </div>
      </div>
      <div className="row my-2">
        <div className="col-md-6">
          <Card info={infoNormaBas} />
        </div>
        <div className="col-md-6">
          <img
            alt="Normatividad"
            title="Normatividad"
            width="535px"
            height="270px"
            src="https://www.supersociedades.gov.co/nuestra_entidad/PublishingImages/SitePages/Normatividad/Normatividad11.jpg"
          />
        </div>
      </div>
    </div>
  );
}
