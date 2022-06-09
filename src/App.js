import { Component, useState } from 'react';
import './App.css';

const App = (props) => {
  const contador = useState(0);
  const [valueContador, updateContador] = contador; // Destructuring

  const handleClick = () => {
    updateContador(valueContador + 1);
  };

  const handleClickReset = () => {
    updateContador(0);
  };
  return (
    <div className="App">
      <p>Prueba de React</p>
      <h1>{contador}</h1>
      <button onClick={handleClick}>
        Incrementar
      </button>
      <button onClick={handleClickReset}>
        Reset
      </button>
      <p>Magia de React</p>
    </div>
  );
}


export { App };

