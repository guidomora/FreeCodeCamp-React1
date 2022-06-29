
import './App.css';
import {Testimonio} from './componentes/testimonios.js';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1> Productos disponibles de floreria Morabito</h1>
        <Testimonio
        imagen='rosas'
        nombre='Ramo de rosas importadas'
        precio='$10000'
        descripcion='Ramo con 12 rosas rojas importadas con follaje, listo para regalo y tarjetita incluida (envio por barracas gratis)'/>

        <Testimonio
        imagen='seco'
        nombre='Ramo de flores secas'
        precio='$3000'
        descripcion='Ramo de flores secas de estacion listo para regalo y tarjetita incluida (el envio se cobra aparte)'/>
        
        <Testimonio
        imagen='variado'
        nombre='Ramo de flores variadas'
        precio='$4000'
        descripcion='Ramo de flores de estacion variadas (astromelias, liliums, san vicente, margaritas, etc), con follaje y tarjetita incluida (envio por barracas gratis)'/>
      </div>
    </div>
  );
}

export default App;
