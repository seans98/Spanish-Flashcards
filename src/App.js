import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import CardList from './components/CardList/CardList';

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
  },
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
},
  
];

class App extends Component {
  API_URL = 'https://restcountries.eu/rest/v2/all'

  componentDidMount() {
 
    // called when component mounts to the DOM
    // data loading - API 
    // Dont load data inside constructor load in componentdidmount
    console.log('componenetdidMount')
  }

  render() {
    return (
      <div className="App">
        <AppHeader title="Flash Cards"/>
        <CardList cardData={cardData}/>
      </div>
    );
  }

}

export default App;
