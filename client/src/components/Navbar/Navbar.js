import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      UniForm
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/questionaire"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/questionaire" className="nav-link">
            Questionaire
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/build"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/build" className="nav-link">
            Build
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/autofill"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/autofill" className="nav-link">
            AutoFill
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/storage"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/storage" className="nav-link">
            Storage
          </Link>
        </li>
        {props.body}
      </ul>
      
    </div>
  </nav>
);

export default Navbar;
