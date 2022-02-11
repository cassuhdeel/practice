import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Clicker() {
  const [counter, setCounter] = useState(0)

  const navigate = useNavigate();

  const buttonHandler = () => {
    setCounter(counter + 1)
  };

  const goClicker2 = () => {
    navigate('/clicker/clicker2')
  }
  
  return (
    <div>
      <p className="mb-4">This is the 'Clicker' Page</p>
      <h4>Clicks: {counter}</h4>
      <button className="btn btn-primary" onClick={buttonHandler}>
        Add Click
      </button>
      <div>
        <button onClick={goClicker2}>Go to Clicker2</button>
      </div>
    </div>
  );
}

export default Clicker;
