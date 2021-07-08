import React, {useState} from "react";
import "./CardsForm.css";

function CardsForm(props) {
    const [frontSide, setFrontSide] = useState('');
    const [backSide, setBackSide] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.addItem(frontSide, backSide)
    alert(` card added front: ${frontSide} back: ${backSide}`);
    setFrontSide('');
    setBackSide('');
  }

  function handleFrontSideChange(e){
      setFrontSide(e.currentTarget.value)
  }
  function handleBackSideChange(e){
    setBackSide(e.currentTarget.value)
}


  return (
    <form action="#" onSubmit={handleSubmit} className="form-container">
        <h1 className="form-header">Add New Card</h1>
      <label className="text-field-container">
        Front Side:
        <input
          type="text"
          onChange={handleFrontSideChange}
          required
          placeholder="Front side"
          className="js-front-side textfield-input"
        />
      </label>
      <label className="text-field-container">
        Back Side:
        <input
          type="text"
          onChange={handleBackSideChange}
          required
          placeholder="Back side"
          className="js-back-side textfield-input"
        />
      </label>
      <input type="submit" value="submit card" className="submit-button" />
    </form>
  );
}
export default CardsForm;
