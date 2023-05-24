import React from "react";
import Botoncss from "./hojas-de-estilo/Boton.css";

function Boton({ texto, esBotonDeClick, manejarClic }) {
  return (
    <button
      className={esBotonDeClick ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
}
export default Boton;
