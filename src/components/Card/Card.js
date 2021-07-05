import React from 'react';
import './Card.css';

// State Change ---> 

const Card = function({frontSide, backSide}) {
    const [isFront, changeFace] = React.useState(true);

    function handleClick() {
        changeFace(oldValue => !oldValue); 
    }
    const frontClassList = "card__front " + (isFront ? "" : "hidden")
    const backClassList = "card__back " + (isFront ? "hidden" : "")
    return (
        <div className="card" onClick={handleClick}>
        <div className={frontClassList}>{frontSide}</div>
        <div className={backClassList }>{backSide}</div>
        </div>
    );
}

export default Card;