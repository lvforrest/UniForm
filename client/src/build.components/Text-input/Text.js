import React from "react";
import TextareaAutosize from 'react-autosize-textarea';
function Text(props) {
  return (
    <TextareaAutosize 
        placeholder='try writing some lines'
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
            marginRight: props.marginRight,
            backgroundColor: props.backgroundColor,
            resize: "none",
            outline: "none" 
          }} 
       />
)
}

export default Text;
