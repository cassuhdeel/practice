import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

function Login() {
  return (
    <div>
      <div>
        <form>
          <div class="form-group">
            <label for='userName'>Username</label>
            <input type="text" id="username" class="form-label" />
          </div>
          <div class="form-group"> 
            <label for='password'>Password</label>
            <input type="password" id="password" class="form-label"  />
          </div>
          <Link to="/clicker">Log In</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
