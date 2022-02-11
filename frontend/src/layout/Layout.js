import { React, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../login/Login";
import Clicker from "../clicker/Clicker";
import Clicker2 from "../clicker/Clicker2";

/**
 * Defines the main layout of the application.
 *
 * @returns {JSX.Element}
 */
function Layout() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/clicker" element={<Clicker />} />
        <Route path="/clicker/clicker2" element={<Clicker2 />} />
      </Routes>
    </Fragment>
  );
}

export default Layout;
