import React from "react";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer
      className="footer mt-auto py-3"
      style={{ "background-color": "#0b0633" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <span className="text-white" style={{ color: "#f24547" }}>
              <strong>Dirección: </strong>Calle 51 #13-47 Bogotá D.C.
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <motion.span
              className="text-white"
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px #ffffff",
                fontWeight: "700",
                color: "#f24547",
              }}
              title="Intentalo"
            >
              <strong>"Oportunidad favorable."</strong>
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
}
