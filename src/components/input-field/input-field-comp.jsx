import React from "react";

import "./input-field-styles.css";

const InputField = ({ inputProps, label }) => {
  return <div className="input-block">
    <label>{label}</label>
    <input className="input-field"{...inputProps}></input>
  </div>
};

export default InputField;
