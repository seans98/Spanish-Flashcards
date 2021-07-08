import React, { useEffect, useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import CardList from "./components/CardList/CardList";
import CardsForm from "./components/CardsForm/CardsForm";
import {v4 as uuidv4} from 'uuid';


function App(props) {
  const [cards, setCards] = useState([]);
 
  useEffect( () => {
    if(cards.length === 0){
      fetch(props.apiUrl)
      .then(data => data.json())
      .then( countries => {
        function getNameandCapital(country) {
          return { frontSide: country.eng, backSide: country.esp, id:uuidv4() };
        }
        const cards = countries.map( getNameandCapital );
        setCards(cards);
      });
      
    } 
  } );

  function addItem(frontSide, backSide) {
      const newItem = {
        frontSide,
        backSide,
        id: uuidv4()
      }
      setCards( previousCards => [newItem,...previousCards]);

    
  }
function deleteItem(id){
  setCards( previousCards =>
      previousCards.filter(card => card.id !==id) 
    );
}


  return (
    <div className="App">
      <AppHeader title="Spanish Vocabulary Flashcards" />
      <CardsForm addItem={addItem}/>
      <CardList cardData={cards} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
