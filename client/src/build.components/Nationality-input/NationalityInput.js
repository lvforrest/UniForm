import React from "react";

const NationalityInput = props => (
  <div className="form-group col-12">
    <label htmlFor={props.key}>Nationality</label>
    <input type="email" className="form-control" id={props.key} aria-describedby="emailHelp" name = {props.name} value = {props.value} id={props.key} onChange = {props.onChange} placeholder="Enter nationality"/>
    <small id="emailHelp" className="form-text text-muted"></small>
  </div>
);

export default NationalityInput;
