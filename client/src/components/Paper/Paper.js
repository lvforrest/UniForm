import React from "react";

const Paper = props => (
  <div
    style={{ width: 850, height: 1100 ,  marginRight: "auto",
    marginLeft: "auto", backgroundColor: "white"}}
    className="paper"
  >
    <div style = {{padding: 100}}className = "content">
    <h1 style = {{textAlign: "center"}}>{props.title}</h1>
    {props.children}
    </div>
  </div>
);

export default Paper;
