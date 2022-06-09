import { Component } from 'react';
import './App.css';



const message = 'Hello World';

const But = () => {
  return (
    <button className='But'>
      {message}
    </button>
  );
}

const Barra = () => {
  return (
    <p>
      {message}
    </p>
  );
}

function App() {
  return (
    <div className="App">
      <Barra />
      <But />
    </div>
  );
}


export { App };

