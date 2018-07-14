import React from "react";
import "./Button.css";

// Destructuring the type, className, children and onClick props, applying them to the button element
const Button = ({ type = "default", className, children, onClick,display}) => (
  <button
    style = {{display}}
    onClick={onClick}
    className={["btn", `btn-${type}`, className].join(" ")}
  >
    {children}
  </button>
);

export default Button;
