import React from "react";

export const Input = props => (
    <input style = { {width: props.width, float: "left", display: "inline-block", boxSizing: "border-box" }}
     className="form-control" value = {props.value} placeholder = {props.placeholder} type = {props.type}
     onChange= {props.onChange} name= {props.name}
     />
);
