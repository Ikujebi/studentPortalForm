import React, { useState } from "react";
import { Form, Button,  Steps, Image } from "antd";
import axios from "axios";
import "../index.css";
import PersonalInfo from "./component/PersonalInfo";
import PersonalInfo2 from "./component/PersonalInfo2";
import EducationDetails from "./component/EducationDetails";
import OtherDetails from "./component/OtherDetails";
import OtherDetails2 from "./component/OtherDetails2";
import image from "./images/saillab.png";


const { Step } = Steps;

function Enrollment() {
  const [form] = Form.useForm();

  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    sex: "",
    occupation: "",
    location: "",
    homeAddress: "",
    dob: null,
    highEdu: "",
    degreeClass: "",
    schoolName: "",
    graduation: "",
    computerSkills: "",
    usedSoftware: "",
    attendSoftware: "",
    biuldWithSkills: "",
    stack: "",
    jobWouldGet: "",
    sector: "",
    whyscholarship: "",
    commitment: "",
    classOfDeg: "",
  });

  const handleChange = (name, value) => {
    if (!/\d/.test(value)) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      dob: date,
    }));
  };

  const handleNextClick = async () => {
    try {
      await form.validateFields();
      const errors = form.getFieldsError();
      if (errors.filter(({ errors }) => errors.length).length === 0) {
        setCurrentStep(currentStep + 1);
      }
    } catch (errorInfo) {
      console.log(errorInfo);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiBaseUrl}/api/endpoint`, formData); // Use apiBaseUrl here
      console.log("API Response:", response.data);
      // Handle success or any additional logic here
    } catch (error) {
      console.error("API Error:", error);
      // Display the error modal using react-toastify
      setErrorMsg("An error occurred. Please try again later."); // Set your custom error message here
    }
  };

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  const steps = [
    {
      title: "Personal Information",
      content: <PersonalInfo />,
    },
    {
      title: "Personal Information contd",
      content: <PersonalInfo2 />,
    },
    {
      title: "Education Details",
      content: <EducationDetails />,
    },
    {
      title: "Other Details",
      content: <OtherDetails />,
    },
    {
      title: "Other Details2",
      content: <OtherDetails2 />,
    },
    // ... Add more steps as needed
  ]

  return (
    <div >
      <div className="image">
      <Image src={image} alt="..." preview={false} />
      </div>
      <div className="center">
        <div className="formHead">
        <h1>Registration Form</h1>
        </div>
        
      
    <Form
      form={form}
      layout="vertical"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      onFinish={handleSubmit}
    >
      <Steps current={currentStep} responsive style={{ marginBottom: "20px" }} items={steps} />

      {steps[currentStep].content}
      <div style={{ marginTop: 24 }}>
        {currentStep < steps.length - 1 && (
          <Button type="primary" onClick={handleNextClick}>
            Next
          </Button>
        )}
        {currentStep === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {currentStep > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => setCurrentStep(currentStep - 1)}>
            Previous
          </Button>
        )}
      </div>
    </Form>
    </div>
    </div>
  );
}

export default Enrollment;
