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
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li color="inherit" classNameName={
                    window.location.pathname === "/"
                    ? "nav-item active"
                    : "nav-item"}>
                    <Link to="/" classNameName="nav-link">
                        Home
                    </Link>
            </li>
                 {/* ===================================== */}
        {/* Account */}
        {/* ===================================== */}
            <li color="inherit" classNameName={
                    window.location.pathname === "/Account"
                    ? "nav-item active"
                    : "nav-item"}>
                    <Link to="/Account" classNameName="nav-link">
                        Account
                    </Link>
            </li>
        {/* ===================================== */}
        {/* Questionnaire */}
        {/* ===================================== */}
            <li color="inherit" classNameName={
                window.location.pathname === "/buildTemplate"
                ? "nav-item active"
                : "nav-item"}>
                <Link to="/buildTemplate" classNameName="nav-link">
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
          {/* <a className="dropdown-item" href="/managePatrons" color="inherit">Patrons</a> */}
          <a className="dropdown-item" href="/managePatronData" color="inherit">Patrons</a>
          </div>
        </li>
        {/* ===================================== */}
        {/* Autofill */}
        {/* ===================================== */}
        <li className="nav-item" color="inherit" classNameName={
                window.location.pathname === "/autofill"
                ? "nav-item active"
                : "nav-item"}>
                <Link to="/autofill" classNameName="nav-link">
                    Autofill
                </Link>
            </li>
        {/* ===================================== */}
        {/* Landing */}
        {/* ===================================== */}
        <li className="nav-item" color="inherit" classNameName={
                window.location.pathname === "/landing"
                ? "nav-item active"
                : "nav-item"}>
                <Link to="/landing" classNameName="nav-link">
                    Landing
                </Link>
            </li>
        {/* ===================================== */}
        {/* Sign Out */}
        {/* ===================================== */}
            <li color="inherit" classNameName={
                window.location.pathname === "/"
                ? "nav-item active"
                : "nav-item"}>
                <Link to="/" classNameName="nav-link">
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