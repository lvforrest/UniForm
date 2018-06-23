import React from "react";

const NameInput = props => (
  <div className="form-group col-3">
    <label htmlFor={props.key}>First Name</label>
    <input type="firstname" className="form-control" id={props.key} aria-describedby="nameHelp" placeholder="Your Name"/>
  </div>
);

export default NameInput;
