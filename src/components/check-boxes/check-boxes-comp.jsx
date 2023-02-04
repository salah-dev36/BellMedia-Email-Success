import React, { useState, useEffect } from "react";
import "./check-boxes-styles.css";

const CheckBoxes = ({ questions, onCheckHandler }) => {
  const [checkedState, setCheckedState] = useState([]);

  useEffect(() => {
    if (questions?.length > 0) {
      setCheckedState(new Array(questions?.length).fill(false));
    }
  }, [questions]);

  const handleOnChange = (event) => {
    const newCheckedState = checkedState.map((item, index) => {
      return index === Number(event.target.id) ? !item : item;
    });
    setCheckedState(newCheckedState);

    const checkBoxesValues = newCheckedState.map((checked, index) =>
      checked ? `<li>${questions[index].displayValue}</li>` : undefined
    );
    onCheckHandler(checkBoxesValues.filter(Boolean));
  };

  return (
    <div className="checkboxes-container">
      {questions?.length > 0
        ? questions.map(({ id, displayValue }, index) => (
            <div key={id}>
              <input
                type="checkbox"
                id={index}
                value={displayValue}
                onChange={(event) => handleOnChange(event)}
              />
              <label>{displayValue}</label>
            </div>
          ))
        : ""}
    </div>
  );
};

export default CheckBoxes;
