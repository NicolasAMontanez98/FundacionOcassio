import React from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";

export default function AboutUs() {
  const infoObjGeneral = {
    title: "Objetivo general",
    description:
      "Atención integral a la población afectada por el consumo de sustancias psicoactivas, a partir del apoyo y la atención psicosocial proporcionados por la fundacions Ocassio Colombia.",
    someInfo: "Agregado 11-2020",
  };
  const infoDescGeneral = {
    title: "Descripción",
    description:
      "Occasio Colombia será una empresa con actividad terciaria, tendremos 100 empleados, por esta razón nuestro tamaño sera mediano, la propiedad del capital será mixto y seremos una fundación limitada ya que solo tendremos dos socios.",
    someInfo: "Agregado 11-2020",
  };
  const infoMision = {
    title: "Misión",
    description:
      "Brindamos apoyo a la población infantil y adolescente en un rango de 6 a 17 años de edad, que se encuentren cursando  educación básica, y sean consumidores activos de Sustancias Psicoactivas ( SPA ) a través de acompañamiento psicosocial, desintoxicación, formación y actividades extracurriculares, enfocadas al arte y al deporte.",
    someInfo: "Agregado 11-2020",
  };
  const infoVision = {
    title: "Visión",
    description:
      "Para el 2025 queremos ser una organización renombrada y conocida en el ámbito de las rehabilitaciones y la exclusión social, trabajando para mejorar las intervenciones, tanto en prevención como en la rehabilitación, reforzando la reinserción socio-laboral de las personas con problemas de  adicción, comprometidos a los cambios sociales.",
    someInfo: "Agregado 11-2020",
  };
  return (
    <div className="container">
      <h1 className="mt-4">Nosotros</h1>
      <hr />
      <div className="row my-2">
        <div className="col-md-12">
          <img
          className="my-2"
            alt="Misión"
            title="Misión"
            width="1110px"
            height="570px"
            src="https://res.cloudinary.com/dkrcosw87/image/upload/v1604954300/1_mxftba.png"
          />
          <Card info={infoDescGeneral} />
        </div>
      </div>
      <div className="row my-2">
        <div className="col-md-6">
          <Card info={infoMision} />
        </div>
        <div className="col-md-6">
          <img
            alt="Misión"
            title="Misión"
            width="535px"
            height="270px"
            src="https://static.plenummedia.com/40894/files/20151009111522-foto-mayor-vision-horizonte.jpg"
          />
        </div>
      </div>
      <div className="row my-2">
        <div className="col-md-6">
          <img
            alt="visión"
            title="visión"
            width="535px"
            height="270px"
            src="https://cdn.ticbeat.com/src/uploads/2018/01/curso-mas-popular-yale-felicidad.jpg"
          />
        </div>
        <div className="col-md-6">
          <Card info={infoVision} />
        </div>
      </div>
      <div className="row my-2">
        <div className="col-md-6">
          <Card info={infoObjGeneral} />
          <div className="card border border-primary my-2">
            <div
              className="card-header"
              style={{ "background-color": "#0b0633" }}
            >
              <h3 className="card-title mb-0 text-white">
                Objetivos especificos
              </h3>
            </div>
            <div className="card-body">
              <div class="list-group">
                <motion.button
                  whileHover={{
                    scale: 1.0,
                    fontWeight: "900",
                    color: "#000",
                  }}
                  type="button"
                  class="list-group-item list-group-item-action"
                >
                  Identificar y contextualizar la población afectada por el
                  consumo de sustancias psicoactivas
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.0,
                    fontWeight: "900",
                    color: "#000",
                  }}
                  type="button"
                  class="list-group-item list-group-item-action"
                >
                  Determinar y crear el modelo de intervención para dar un apoyo
                  a la población que está siendo afectada por el consumo de
                  sustancias psicoactivos
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.0,
                    fontWeight: "900",
                    color: "#000",
                  }}
                  type="button"
                  class="list-group-item list-group-item-action"
                >
                  Aplicar el modelo de intervención, en busca de la mejora de
                  hábitos, para la recuperación de las personas afectadas
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.0,
                    fontWeight: "900",
                    color: "#000",
                  }}
                  type="button"
                  class="list-group-item list-group-item-action"
                >
                  Evaluar el impacto que genero y los cambios que se realizaron
                  en la población, a partir de la intervención que se hizo
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img
            alt="Objetivos"
            title="Objetivos"
            width="535px"
            height="644px"
            src="https://archivo.proyectohombre.es/wp-content/uploads/2011/11/valores-proyecto-hombre1.jpg  "
          />
        </div>
      </div>
      <div className="row my-2">
        <div className="col-md-12">
          <div className="card border border-primary my-2">
            <div
              className="card-header"
              style={{ "background-color": "#0b0633" }}
            >
              <h3 className="card-title mb-0 text-white">Organigrama</h3>
            </div>
            <div className="card-body">
              <img
                alt="Organigrama"
                title="Organigrama"
                width="1065px"
                height="644px"
                src="https://res.cloudinary.com/dkrcosw87/image/upload/v1604952830/Organigrama_fundaci%C3%B3n_qi4yfl.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
