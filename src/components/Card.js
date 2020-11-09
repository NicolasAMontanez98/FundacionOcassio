import React from "react";

export default function Card({ info }) {
  function getLink() {
    switch (info.title) {
      case "Misión":
        return "/nosotros/#" + info.title;
      case "Visión":
        return "/nosotros/#" + info.title;
      case "Objetivo general":
        return "/nosotros/#" + info.title;
      default:
        return "/";
    }
  }

  let link = getLink();

  return (
    <div className="card d-flex border-0">
      <div
        className="card-header text-left"
        style={{ "background-color": "#0b0633" }}
      >
        <h3 id={info.title} className="card-title mb-0 text-white">
          {info.title}
        </h3>
      </div>
      <div className="card-body">
        <p className="card-text">{info.description}</p>
      </div>
      <div className="card-footer text-left">
        <a className="text-muted mb-0" href={link}>
          {info.someInfo}
        </a>
      </div>
    </div>
  );
}
