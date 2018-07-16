import React from "react";
import Checkbox from 'rc-checkbox';

function RadioInput(props) {
  return (
    
    <label 
        
        style = {{ minHeight: "38px", marginBottom: "3px", marginTop: "3px", marginRight: props.marginRight, marginLeft: props.marginLeft, fontFamily: props.fontFamily,fontSize: props.fontSize ,color: props.color, backgroundColor: props.backgroundColor, float:"left"}}    
        onClick = {() => props.onClick(props.param,props.type)}
        key = {props.key}
      >
      
         <Checkbox
                defaultChecked = {props.defaultChecked}
                value = {props.value}
                onChange= {(e) => props.onChange(e,props.key)}
                disabled={props.disabled}
              />
              &nbsp; {props.label}
      </label>
)
}

export default RadioInput;
