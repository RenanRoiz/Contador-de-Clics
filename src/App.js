import './App.css';
import RenanLogo from './imagenes/Logo Renan.png'
import Boton from './Componentes/boton';
import Contador from './Componentes/contador';
import { useState } from 'react';

function App() {

  const [numClics,setNumClics]= useState(0);

  const manejarClic = ()=>{
    setNumClics(numClics+1);
  }

  const reiniciarContador = ()=>{
    setNumClics(0)
  }

  return (
    <div className="App">
      <div className="renan-logo-contenedor">
        <img className="renan-logo" src={RenanLogo} alt="Logo de renan"/>
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Click" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton texto="Reiniciar" esBotonDeClic={false} manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
