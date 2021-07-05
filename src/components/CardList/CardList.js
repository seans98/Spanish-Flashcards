// import React from 'react';
import Card from '../Card/Card'
import './CardList.css'

function CardList({cardData}){
    return (
        <div className="card-list-swimlane">
        {cardData.map( Card )}
        </div>
        );
}
export default CardList;