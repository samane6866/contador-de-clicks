import "./App.css";
import freeCodeCampLogo from "./imagenes/FreeCodeCamp_logo.png";

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freecodecamp"
        />
        <div className="contenedor-principal"></div>
      </div>
    </div>
  );
}

export default App;
