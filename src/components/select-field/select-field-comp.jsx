import React, { useEffect, useState } from "react";
import "./select-field-styles.css";

const SelectField = ({ selectFieldProps, options, placeHolder, label }) => {
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(()=> {
    if (options?.length > 0){
      setIsDisabled(false)
    }else{
      setIsDisabled(true)
    }
   }, [options])
  return (
    <div className="select-block">
      <label>{label}</label>
      <select disabled={isDisabled} className="select-field" {...selectFieldProps}>
        <option value="">{placeHolder}</option>
        {options?.map(({ id, displayValue }) => (
          <option key={id} value={id}>
            {displayValue}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
