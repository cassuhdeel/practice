import React, { useState } from "react";

function Clicker2() {

  const [counter, setCounter] = useState(0) 

const clickerHandler = () => {
  setCounter(counter + 2)
}

  return (
    <div style={{ color: "green", fontSize: 30 }}>
      This is the SECOND 'Clicker' Page
      <div>
        <button className="btn btn-secondary" onClick={clickerHandler} >
          Clicker 2: {counter}
        </button>
      </div>
    </div>
  );
}

export default Clicker2;
