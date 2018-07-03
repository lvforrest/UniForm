import React from "react";

const EmailInput = props => (
  <div style = { {width:props.width, display: "inline-block", float: "left", boxSizing: "border-box", marginRight: "2.5%"}}>
  <div className="form-group">
    <label htmlFor={props.key}>Email address</label>
    <input  type="email" className="form-control" id={props.key} aria-describedby="emailHelp" name = {props.name} onChange = {props.onChange} value = {props.value} placeholder="Enter email"/>
  </div>
  </div>
);

export default EmailInput;
