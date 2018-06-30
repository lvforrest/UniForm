import React from "react";

const GenderInput = props => (
<div className="col-12">  
<label htmlFor={props.key}>Gender</label>  
<div className="form-check">
    <input className="form-check-input" type="radio" name="male" id="male" value="Male" ></input>
    <label className="form-check-label" for="male">
      Male
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="female" id="female" value="Female"></input>
    <label className="form-check-label" for="female">
      Female
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="other" id="other" value="Other"></input>
    <label className="form-check-label" for="other">
        Other
  </label>
</div>
</div>
);

export default GenderInput;