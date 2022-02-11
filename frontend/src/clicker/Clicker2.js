import React, { useState } from "react";

function Clicker2() {
  const initialForm = {
    name: "Name",
    counter: 0
  };
  const [formData, setFormData] = useState(initialForm);

  const clickerHandler = () => {
    setFormData(({counter}) => ({
      ...formData,
      counter: counter + 2
    }))
  };

  const changeHandler = (event) => {
    setFormData= ({
      [event.target.name]: event.target.value
    })
  }

  return (
    <div style={{ color: "green", fontSize: 30 }}>
      This is the SECOND 'Clicker' Page
      <div>
        <button className="btn btn-secondary" onClick={clickerHandler}>
          Clicker 2: {formData.counter}
        </button>
      </div>
      <div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              id="name"
              type="text"
              value={formData.name}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="counter">Counter</label>
            <input
              name="counter"
              id="counter"
              type="number"
              value={formData.counter}
              onChange={changeHandler}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Clicker2;
