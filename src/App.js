import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/form-comp";
import Header from "./components/header/header-comp";
import Response from "./components/response/response-comp";

const App = () => {
  const [formFields, setFormFields] = useState(null);

  return (
    <div className="app">
      <Header />
      <div className="homepage">
        <Form setFormFields={setFormFields} />
        {formFields ? <Response formFields={formFields} /> : ""}
      </div>
    </div>
  );
};

export default App;
