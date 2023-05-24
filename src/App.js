import "./App.css";
import freeCodeCampLogo from "./imagenes/FreeCodeCamp_logo.png";
import Contador from "./componentes/Contador";
import Boton from "./componentes/Boton";
import { useState } from "react";

function App() {
  const [numClics, setNumclics] = useState(0);
  const manejarClic = () => {
    setNumclics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumclics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freecodecamp"
        />
        <div className="contenedor-principal"></div>
        <Contador numClics={numClics} />
        <Boton texto="clic" esBotonDeClick={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
