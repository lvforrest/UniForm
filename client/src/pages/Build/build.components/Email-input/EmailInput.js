import React from "react";

const EmailInput = props => (
  <div className="form-group col-3">
    <label htmlFor={props.key}>Email address</label>
    <input type="email" className="form-control" id={props.key} aria-describedby="emailHelp" value = {props.value}placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">Example@example.edu</small>
  </div>
);

export default EmailInput;
