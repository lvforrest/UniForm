import React from "react";
import StreetAddressInput from "./components/streetAddress";
import CityInput from "./components/city";
import StateInput from "./components/state";
import ZipInput from "./components/zip";


const AddressInput = props => (
  <div className="col-12">
    <form>
      <StreetAddressInput />
      <div className="row">
        <CityInput /><StateInput /><ZipInput />
      </div>    
    </form>
  </div>
);

export default AddressInput;