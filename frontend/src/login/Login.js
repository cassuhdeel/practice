import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

function Login() {
  return (
    <div>
      <div>
        <form>
          <div>
            <label>Username</label>
            <input type="text" id="username" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" id="password" />
          </div>
          <Link to="/clicker">Log In</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
