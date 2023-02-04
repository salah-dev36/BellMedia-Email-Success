import React, { useState, useEffect } from "react";
import "./form-styles.css";

import CATEGORIES from "../../data/types/categories-types";

import {
  agentNames,
  requestsCategories,
  requestsArray,
  questionsArray,
} from "../../data/form-data/form-data";
import { brandsInfo } from "../../data/email-data/email-data";
import SelectField from "../select-field/select-field-comp";
import InputField from "../input-field/input-field-comp";
import CheckBoxes from "../check-boxes/check-boxes-comp";

const defaultValues = {
  brand: "",
  agent: "",
  customer: "",
  category: "",
  request: "",
  checkedBoxes: [],
};

const Form = ({ setFormFields }) => {
  const [brands, setBrands] = useState(brandsInfo);
  const [agents, setAgents] = useState(agentNames);
  const [categories, setCategories] = useState([]);
  const [requests, setRequests] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedValues, setSelectedValues] = useState(defaultValues);
  const { agent, brand, category } = selectedValues;

  useEffect(() => {
    if (brand) {
      const filteredCategories = requestsCategories.filter((category) => {
        return category.platform.includes(brand);
      });

      setCategories(filteredCategories);
    } else {
      setCategories([]);
    }
  }, [brand]);

  useEffect(() => {
    if (category && brand) {
      const filteredRequest = requestsArray.filter(({ parentId, platform }) => {
        return parentId.includes(category) && platform.includes(brand);
      });
      setRequests(filteredRequest);
    } else {
      setRequests([]);
    }
  }, [brand, category]);

  useEffect(() => {
    if (
      brand &&
      (category === CATEGORIES.PROBING ||
        category === CATEGORIES.TROUBLESHOOTING)
    ) {
      const filteredQuestions = questionsArray.filter(
        ({ parentId, platform }) => {
          return parentId.includes(category) && platform.includes(brand);
        }
      );
      setQuestions(filteredQuestions);
    } else {
      setQuestions([]);
    }
  }, [brand, category]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setSelectedValues({ ...selectedValues, [name]: value });
  };

  const onCheckHandler = (checkBoxesArray) => {
    setSelectedValues({ ...selectedValues, checkedBoxes: checkBoxesArray });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!brand || !agent)
      alert("please select all fields before submitting the form");
    setFormFields(selectedValues);
  };

  return (
    <div className="form-outer-container">
      <h3 className="title">Generate E-mail:</h3>
      <div className="form-inner-container">
        <div className="selects-container">
          <InputField
            label="Customer Name"
            inputProps={{
              type: "text",
              name: "customer",
              onChange: onChangeHandler,
              value: selectedValues.customer,
              placeholder: "Type client Name",
            }}
          />
          <SelectField
            selectFieldProps={{ name: "agent", onChange: onChangeHandler }}
            placeHolder="Select Agent"
            label="Agent Name"
            options={agents}
          />

          <SelectField
            selectFieldProps={{ name: "brand", onChange: onChangeHandler }}
            placeHolder="Select Brand"
            label="Brand"
            options={brands}
          />

          <SelectField
            selectFieldProps={{ name: "category", onChange: onChangeHandler }}
            placeHolder="Select Category"
            label="Category"
            options={categories}
          />

          <SelectField
            selectFieldProps={{ name: "request", onChange: onChangeHandler }}
            placeHolder="Select Request"
            label="Request"
            options={requests}
          />
        </div>
        <CheckBoxes questions={questions} onCheckHandler={onCheckHandler} />
        <button className="submit-button" onClick={onSubmitHandler}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Form;
