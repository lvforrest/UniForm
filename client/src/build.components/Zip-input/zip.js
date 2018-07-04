import React from "react";

const ZipInput = props => (
  <div className="form-group">
    <form>
    <div style = {{ width:props.width, display: "inline-block", float: "left", boxSizing: "border-box"}}>
        <div class="form-group">
              <input name = {props.name} value = {props.value} id={props.key} onChange = {props.onChange} type="address" class="form-control" id="AddressInput" placeholder="Zip"></input>
        </div>
        </div>
    </form>
  </div>
);

export default ZipInput;