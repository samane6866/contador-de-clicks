import "./App.css";
import freeCodeCampLogo from "./imagenes/FreeCodeCamp_logo.png";
import Boton from "./componentes/Boton";

function App() {
  const manejarClic = () => {
    console.log("clic");
  };
  const reiniciarContador = () => {
    console.log("Reiniciar");
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
        <Boton texto="clic" esBotonDeClick={true} manejarClic={manejarClic} />
        <Boton
          texto="reiniciar"
          esBotonDeClick={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
