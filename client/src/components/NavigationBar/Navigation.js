import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css";


function ButtonAppBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">UniForm</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" 
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="floatNav">
        {/* ===================================== */}
        {/* Home */}
        {/* ===================================== */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown" id="Home">
          <ul className="navbar-nav">
            <li color="inherit" className={
                    window.location.pathname === "/"
                    ? "nav-item active"
                    : "nav-item"}>
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
            </li>
        {/* ===================================== */}
        {/* Account */}
        {/* ===================================== */}
            <li color="inherit" className={
                    window.location.pathname === "/Account"
                    ? "nav-item active"
                    : "nav-item"}>
                    <Link to="/Account" className="nav-link">
                        Account
                    </Link>
            </li>
         {/* Account */}
        {/* ===================================== */}
        <li color="inherit" className={
                    window.location.pathname === "/Login"
                    ? "nav-item active"
                    : "nav-item"}>
                    <Link to="/Login" className="nav-link">
                        Login
                    </Link>
            </li>
        {/* ===================================== */}
        {/* Build */}
        {/* ===================================== */}
            <li color="inherit" className={
                window.location.pathname === "/buildTemplate"
                ? "nav-item active"
                : "nav-item"}>
                <Link to="/buildTemplate" className="nav-link" id="Build">
                    Build
                </Link>
            </li>
        {/* ===================================== */}
        {/* Manage Dropdown Menu */}
        {/* ===================================== */}
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Manage
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/manageForms">Forms</a>
          <a className="dropdown-item" href="/managePatrons" color="inherit">Patrons</a>
          <a className="dropdown-item" href="/managePatronData" color="inherit">Patron Data</a>
          </div>
        </li>
        {/* ===================================== */}
        {/* Autofill */}
        {/* ===================================== */}
        <li className="nav-item" color="inherit" className={
                window.location.pathname === "/autofill"
                ? "nav-item active"
                : "nav-item"}>
                <Link to="/autofill" className="nav-link" id="Autofill">
                    Autofill
                </Link>
            </li>
        {/* ===================================== */}
        {/* Sign Out */}
        {/* ===================================== */}
            <li color="inherit" className={
                window.location.pathname === "/"
                ? "nav-item active"
                : "nav-item"}>
                <Link to="/" className="nav-link" id="Signout">
                    Sign Out
                </Link>
            
            </li>
          </ul>
        </div>
        </div>
      </nav>
    
    );
  }

export default ButtonAppBar;