import React from "react";

const StreetAddressInput = props => (
  <div className="form-group">
    <form>
        <div class="form-group">
            <label for="exampleFormControlInput1">Address</label>
            <input type="address" class="form-control" id="AddressInput" placeholder="Street Address"></input>
        </div>
    </form>
  </div>
);

export default StreetAddressInput;