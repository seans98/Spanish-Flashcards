import React, { Component, useEffect, useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import CardList from "./components/CardList/CardList";
import CardsForm from "./components/CardsForm/CardsForm"

const cardData = [
  {
    frontSide: "9*8",
    backSide: "72",
  },
  {
    frontSide: "2**8",
    backSide: "256",
  },
  {
    frontSide: "rabbit*8",
    backSide: "rabbyte",
  },
  {
    frontSide: "9*8",
    backSide: "72",
  },
  {
    frontSide: "2**8",
    backSide: "256",
  },
  {
    frontSide: "rabbit*8",
    backSide: "rabbyte",
  },
];

class App2 extends Component {
  state = {
    cards: []
  };

  componentDidMount() {

    fetch(this.props.apiUrl)
      .then(data => data.json())
      .then( countries => {
        function getNameandCapital(country) {
          return { frontSide: country.name, backSide: country.capital };
        }
        const cards = countries.map( getNameandCapital );
        this.setState({cards})
      });
  }

  render() {
    return (
      <div className="App">
        <AppHeader title="Flash Cards" />
        
        <CardList cardData={this.state.cards} />
      </div>
    );
  }
}

function App(props) {
  const [cards, setCards] = useState([]);
 

  // functionCallback is called
  // 1 componenet did mount
  // 2 componenetdid update or unmount

  useEffect( () => {
    if(cards.length === 0){
      fetch(props.apiUrl)
      .then(data => data.json())
      .then( countries => {
        function getNameandCapital(country) {
          return { frontSide: country.eng, backSide: country.esp };
        }
        const cards = countries.map( getNameandCapital );
        setCards(cards);
      });
      
    } 
  } );

  return (
    <div className="App">
      <AppHeader title="Flash Cards" />
      <CardsForm />
      <CardList cardData={cards} />
    </div>
  );
}

export default App;
