import React from "react";
import "./response-styles.css";
import { generateEmail } from "../../utils/generate";
import parse from "html-react-parser";

const Response = ({ formFields }) => {
  return (
    <div className="outer-container">
      <div className="inner-container">
        {formFields && parse(generateEmail(formFields))}
      </div>
    </div>
  );
};

export default Response;
