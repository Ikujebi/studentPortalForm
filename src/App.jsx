import React from "react";
import { Route, Routes } from "react-router-dom";
import Enrollment from "./views/enrollment/Enrollment";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0f4b93",
        },
        components: {
          Input: {
            lineHeight: 2.5
          },
          Select: {
            controlHeight: 43
          },
          DatePicker: {
            controlHeight: 43
          }
        }
      }}
    >
      <Routes>
        <Route path="/" element={<Enrollment />} />
        {/* Add more routes as needed */}
      </Routes>
    </ConfigProvider>
  );
}

export default App;
