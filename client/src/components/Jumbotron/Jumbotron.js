import React from "react";
import './Jumbotron.css';

const Jumbotron = ({ children }) => (

  <div
    style={{ clear: "both", paddingTop: 20, textAlign: "center" }}
    className="jumbotron jumbotron-fluid"
  >
  <div id="jumbotronChildren">
    {children}
    </div>
  </div>

);

export default Jumbotron;