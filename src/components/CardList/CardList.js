// import React from 'react';
import Card from '../Card/Card'
import './CardList.css'
import { v4 as uuidv4 } from 'uuid'

function CardList({cardData}){
    return (
        <div className="card-list-swimlane">
        {cardData.map( props => <Card key={uuidv4()} {...props} /> )}
        </div>
        );
}
export default CardList;