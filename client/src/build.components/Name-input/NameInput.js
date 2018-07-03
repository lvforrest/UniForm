import React from "react";

const NameInput = props => (
  <div style = { {width:props.width, display: "inline-block", float: "left", boxSizing: "border-box"}}>
  <div className="form-group" >
    <label htmlFor={props.key}>First Name</label>
    <input  type="firstname" className="form-control" name = {props.name} value = {props.value} id={props.key} onChange = {props.onChange} aria-describedby="nameHelp" placeholder="Your Name"/>
  </div>
  </div>
);

export default NameInput;
