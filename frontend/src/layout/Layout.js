import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../login/Login";

function Layout() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Login />
        </Route>
      </Routes>
    </div>
  );
}

export default Layout;
