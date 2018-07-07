import React from "react";

const StateInput = props => (
  <div className="form-group" >
  <div style = {{ width:props.width, display: "inline-block", float: "left", boxSizing: "border-box", marginRight: "2.5%"}}>
    <form>
        <span class="form-group">
              <input name = {props.name} value = {props.value} id={props.key} onChange = {props.onChange} type="address" class="form-control" id="AddressInput" placeholder="State"></input>
        </span>
    </form>
    </div>
  </div>
);

export default StateInput;