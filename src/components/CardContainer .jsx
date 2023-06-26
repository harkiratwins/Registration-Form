import React, { useState } from "react";
import CardComponent from "./Card";

const CardContainer = () => {
  const [cardCount, setCardCount] = useState(0);

  const handleButtonclick = () => {
    setCardCount(cardCount + 1);
  };

  

  return (
    <div className="App">
      <h1>Appointment Card UI</h1>
      <br></br>
      <button onClick={handleButtonclick}>Add Card</button>
      {Array.from({ length: cardCount }).map((_, index) => (
        <CardComponent key={index} />
      ))}
    </div>
  );
};

export default CardContainer;
