import React from "react";

const ZipInput = props => (
  <div className="form-group">
    <form>
    <div style = {{ width:props.width, display: "inline-block", float: "right", boxSizing: "border-box"}}>
        <div class="form-group">
              <input type="address" class="form-control" id="AddressInput" placeholder="Zip"></input>
        </div>
        </div>
    </form>
  </div>
);

export default ZipInput;