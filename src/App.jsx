import React from "react";
import RegistrationForm from "./component/Registration";
import image from "./images/saillab.png"
 import { Image } from "antd";
import "./App.css";




function App() {
  return (
    <div className="App">
      <div className="logo">
      <Image className="image"  src= {image}  alt="sail logo"/>
      </div>
      
      <h1>Registration Form  </h1>
        
      <RegistrationForm />
    </div>
  );
}

export default App;