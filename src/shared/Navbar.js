import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ "background-color": "#0b0633" }}
    >
      <a className="navbar-brand" href="/">
        <img
          src="https://res.cloudinary.com/dkrcosw87/image/upload/v1604892313/banners/logo_fundaci%C3%B3n_ywqote.png"
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="Ocassio"
          title="Ocassio"
          loading="lazy"
        />
      </a>
      <a className="navbar-brand" href="/">
        <motion.h3
          whileHover={{
            scale: 1.1,
            fontWeight: "900",
            color: "#Ffffff",
          }}
        >
          Ocassio <br/>Colombia
        </motion.h3>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <motion.a
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px #F24547",
                fontWeight: "900",
                color: "#Ffffff",
              }}
              className="nav-link"
              href="/"
            >
              Inicio
            </motion.a>
          </li>
          <li className="nav-item">
            <motion.a
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px #F24547",
                fontWeight: "900",
                color: "#Ffffff",
              }}
              className="nav-link"
              href="/nosotros"
            >
              Nosotros
            </motion.a>
          </li>
          <li className="nav-item">
            <motion.a
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px #F24547",
                fontWeight: "900",
                color: "#Ffffff",
              }}
              className="nav-link"
              href="/servicios"
            >
              Servicios
            </motion.a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
