import React from "react";
import './Jumbotron.css';

function Jumbotron(props) {
  return (
  <div
    style={{ clear: "both", paddingTop: 20, textAlign: "center" }}
    className="jumbotron jumbotron-fluid">
    <div>
      <h1 id="jumbotronHeader">{props.name}</h1>
    </div>
    </div>
  );
}

export default Jumbotron;