import React from "react";

const AddressInput = props => (
  <div className="form-group col-3">
    <form>
        <div class="form-group">
            <label for="exampleFormControlInput1">Address</label>
            <input type="address" class="form-control" id="AddressInput" placeholder=""></input>
        </div>
    </form>
  </div>
);

export default AddressInput;