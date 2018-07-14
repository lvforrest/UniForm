import React from "react";
import "./Paper.css";

const Paper = props => (
  <div
    style={{ width: 850, height: 1100, position: 'relative', left: props.left, right: props.right, backgroundColor: "white"}}
    className="paper"
  >
    <div style = {{padding: 100}}className = "content">
    <h1 style = {{textAlign: "center"}}>{props.title}</h1>
    {props.children}
    </div>
  </div>
);

export default Paper;
