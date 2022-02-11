import { React, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../login/Login";

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
      </Routes>
    </Fragment>
  );
}

export default Layout;
