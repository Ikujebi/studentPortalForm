import React from "react";
import RegistrationForm from "./component/Registration";
import image from "./images/saillab.png";
import {Form, Image } from "antd";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Form.Provider>
      <div className="logo">
      
        <Image className="image" src={image} alt="sail logo" />
      </div>
      <h1>Registration Form </h1>
      <RegistrationForm />
      </Form.Provider>
    </div>
  );
}

export default App;
