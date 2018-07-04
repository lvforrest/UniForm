import React from "react";

const LanguageInput = props => (
  <div className="form-group col-12">
    <label htmlFor={props.key}>Language Spoken</label>
    <input name = {props.name} value = {props.value} id={props.key} onChange = {props.onChange} type="email" className="form-control" id={props.key} aria-describedby="emailHelp" placeholder="Enter language"/>
    <small id="emailHelp" className="form-text text-muted"></small>
  </div>
);

export default LanguageInput;
