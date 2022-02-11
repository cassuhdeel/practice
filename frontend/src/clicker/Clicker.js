import React from "react";
import { Link } from "react-router-dom";

function Clicker() {
  return (
    <div>
      This is the 'Clicker' Page
      <Link to="/clicker/clicker2">Go to Clicker2</Link>
    </div>
  );
}

export default Clicker;
