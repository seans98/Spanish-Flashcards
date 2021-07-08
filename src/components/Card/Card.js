import React from "react";
import "./Card.css";

// State Change --->

const Card = function ({ frontSide, backSide, id, deleteItem }) {
  const [isFront, changeFace] = React.useState(true);

  function handleClick() {
    changeFace((oldValue) => !oldValue);
  }
  function handleDelete() {
    deleteItem(id);
  }
  const frontClassList = "card__front " + (isFront ? "" : "hidden");
  const backClassList = "card__back " + (isFront ? "hidden" : "");
  return (
    <div className="card" onClick={handleClick}>
      <div className={frontClassList}>{frontSide}</div>
      <div className={backClassList}>{backSide}</div>
      <span
        href="javascript:void(0)"
        className="card__delete"
        onClick={handleDelete}
      >
        X
      </span>
    </div>
  );
};

export default Card;
