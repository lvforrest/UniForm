import React from "react";

export const TextArea = props => (
  <div className="form-group">
    <textarea style = {{border: "none",backgroundColor:"transparent",resize: "none", outline: "none"}} className="form-control" rows="20" {...props} />
  </div>
);
