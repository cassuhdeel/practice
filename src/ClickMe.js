import React, {useState} from 'react';
import './App.css'

export default function ClickMe() {
    const [clickButton, setClickButton] = useState(0)
    console.log('Click count: ', clickButton)
  return (
  <div className='btn'>
      <button onClick={() => setClickButton(clickButton + 1)} className="btn btn-primary">
          Click count: {clickButton}
      </button>
  </div>
  );
}
