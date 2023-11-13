
import './App.css';
import logoPagina from './Imagenes/logo.png'
import Boton from './Componentes/Boton.js';
import Pantalla from './Componentes/Pantalla.js';
import BotonClear from './Componentes/BotonClear.js';
//Hook para asignar estado al Componente
import { useState } from 'react';
import {evaluate} from 'mathjs'

function App() {

  const [input, setInput] = useState(''); 

  const agregarInput = val => {
    setInput(input + val);
  }
  /*Para llamar esta Función necesito agregar un
    EventListener a cada Boton */

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert('Ingrese un valor valido');
    }
    
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
        className="logo"
        alt="logo"
        src={logoPagina} />
      </div>
      <div className="contenedor-principal">
        
          <Pantalla input={input} />
        
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <BotonClear manejarClear={() => setInput('')}>AC</BotonClear>
      </div>
    </div>
  );
}

export default App;
