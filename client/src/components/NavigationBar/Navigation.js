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