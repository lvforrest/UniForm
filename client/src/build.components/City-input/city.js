import React from "react";

const CityInput = props => (
  <div className="form-group">
    <form>
    <div style = {{ width:props.width, display: "inline-block", float: "left", boxSizing: "border-box", marginRight: "2.5%"}}>
        <span class="form-group">
              <input type="address" class="form-control" id="AddressInput" placeholder="City"></input>
        </span>
        </div>
    </form>
  </div>
);

export default CityInput;