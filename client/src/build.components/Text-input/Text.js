import React from "react";
import TextareaAutosize from 'react-autosize-textarea';
function Text(props) {
  return (
    <TextareaAutosize 
        placeholder='type something'
        key = {props.keyMaker}
        value = {props.value}
        onClick = {() => props.onClick(props.param,props.type)}
        onChange = {props.onChange}
        style={{
            fontSize: props.fontSize,
            color: props.color,
            fontFamily: props.fontFamily,
            width: props.width, 
            border: "none" ,
            float: "left", 
            marginLeft: props.marginLeft,
            minHeight: "38px",
            marginTop: "3px",
            marginBottom: "3px",
            marginRight: props.marginRight,
            backgroundColor: props.backgroundColor,
            resize: "none",
            outline: "none" 
          }} 
       />
)
}

export default Text;
