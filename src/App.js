import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';

const cardData = [
  {
      frontSide: '9*8',
      backSide: '72'
  },
  {
      frontSide: '2**8',
      backSide: '256'
  },
  {
      frontSide: 'rabbit*8',
      backSide: 'rabbyte'
  }
];

function App() {
  const cardsTemplate = cardData.map( Card )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
      {cardsTemplate}
    </div>
  );
}

export default App;
