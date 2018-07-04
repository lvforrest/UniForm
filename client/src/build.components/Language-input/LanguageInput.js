import React from "react";

const LanguageInput = props => (
  <div className="form-group col-12">
    <label htmlFor={props.key}>Language Spoken</label>
    <input type="email" className="form-control" id={props.key} aria-describedby="emailHelp" value = {props.value}placeholder="Enter language"/>
    <small id="emailHelp" className="form-text text-muted"></small>
  </div>
);

export default LanguageInput;
