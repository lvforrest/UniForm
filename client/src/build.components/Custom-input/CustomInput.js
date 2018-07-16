import React from "react";

function CustomInput(props) {
  return (
  <div
  key = {props.keyMaker}
  className="form-group" 
  style = {{
    
    border: props.border,
    width:props.width, 
    display: "inline", 
    float: "left", 
    boxSizing: "border-box",
    marginLeft: props.marginLeft,
    marginRight: props.marginRight,
    marginBottom: "3px",
    marginTop: "3px",
    position: "relative",
      }}>
    <input  style = {{backgroundColor: props.backgroundColor}} type="firstname" className="form-control" onClick = {() => props.onClick(props.param,props.type)}  name = {props.name} value = {props.value} id={props.key} onChange = {props.onChange} aria-describedby="nameHelp" placeholder={props.placeholder}/>
  </div>
)
}

export default CustomInput;
