import { Component, useState } from 'react';
import './App.css';

//Other way to create a component
const TestComponent = () => {
  const [counters, setCounters] = useState({
    left: 0,
    right: 0,
    mensaje: 'Esto es una estado'
  });

  const [clicks, setClicks] = useState([]);
  
  const handleClickLeft = () => {
    const newCountersState = { 
      ...counters, 
      left: counters.left + 1, 
    };
    setCounters(newCountersState);
    setClicks((prevClicks) => [...prevClicks, 'left']);
  }
  const handleClickRight = () => {
    const newCountersState = { 
      ...counters, 
      right: counters.right + 1, 
    };
    setCounters(newCountersState);
    setClicks((prevClicks) => [...prevClicks, 'right']);
  }
  return (
    <div className="App">
      <h1>{counters.mensaje}</h1>
      <button onClick={handleClickLeft}>Left</button>
      <button onClick={handleClickRight}>Right</button>
      <h2>Clicks: {clicks.length}</h2>
      <ul>
        {clicks.map((click, index) => <li key={index}>{click}</li>)}
      </ul>
    </div>
  );
}

//New component
const Counter = ({ number }) => {
  console.log('Render Counter');
  return <h1>{number}</h1>;
};

const UpDown = (  ) => {
  const [up, setUp] = useState(0);
  const [down, setDown] = useState(0);
  return (
    <div>
      <Counter number={up} />
      <button onClick={() => setUp(up + 1)}>Up</button>
      <button onClick={() => setDown(down + 1)}>Down</button>
      <Counter number={down} />
    </div>
  );
}

const RightLeft = () => {
  const [counters, setCounters] = useState({
    right: 0,
    left: 0,
    clicks: 0,
    mensaje: 'Esto es un msj',
  });

  const handleClickLeft = () => {
    const newCountersState = { 
      ...counters, 
      left: counters.left + 1, 
      clicks: counters.clicks + 1
    };
    setCounters(newCountersState);
  }
  const handleClickRight = () => {
    const newCountersState = { 
      ...counters, 
      right: counters.right + 1, 
      clicks: counters.clicks + 1
    };
    setCounters(newCountersState);
  }


  return (
    <div>
      <h1>{counters.left}</h1>
      <button onClick={handleClickLeft}>Left</button>
      <button onClick={handleClickRight}>Right</button>
      <h1>{counters.right}</h1>
      <p>La suma de los clicks totales</p>
      <h1>{counters.clicks}</h1>
      <h1>{counters.mensaje}</h1>
    </div>
  );
}

const App = () => {
  const [valueContador, setContador] = useState(0); // Destructuring

  console.log('Render App');
  
  const handleClick = () => {
   setContador(valueContador + 1);
  };

  const handleClickReset = () => {
    setContador(0);
  };

  const isEven = valueContador % 2 === 0;
  const mensajePar = isEven ? 'Par' : 'Impar';

  return (
    <div className="App">
      <p>Prueba de React</p>
      <Counter number={valueContador} />
      <p>{mensajePar}</p>
      <button onClick={handleClick}>
        Incrementar
      </button>
      <button onClick={handleClickReset}>
        Reset
      </button>
      <p>Magia de React</p>

      <UpDown />
      <RightLeft />
      <TestComponent />
    </div>
  );
}


export { App };

