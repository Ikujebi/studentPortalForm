import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Enrollment from "./views/Enrollment";
import "./App.css"
function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Enrollment />} /> 
        {/* Add more routes as needed */}
      </Routes>
    
  );
}

export default App;