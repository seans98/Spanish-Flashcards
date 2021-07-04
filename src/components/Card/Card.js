import React from 'react';
import './Card.css';



const Card = function(props) {
    return (
        <ul className="card">
            <li>frontSide: {props.frontSide}</li>
            <li>backSide: {props.backSide}</li>
        </ul>
    );
}

export default Card;