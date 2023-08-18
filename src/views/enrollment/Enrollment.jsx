import { useState } from "react";
import { Form, Button, Steps, message } from "antd";
import PersonalInfo from "./component/PersonalInfo";
import EducationDetails from "./component/EducationDetails";
import OtherDetails from "./component/OtherDetails";
import Track from "./component/Track";
import image from "../../assets/images/saillab.png";
import axios from "axios";
import * as dayjs from 'dayjs'



function Enrollment() {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
const [responseMessage, setResponseMessage] = useState(""); 

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    sex: "",
    dob: "",
    lga: "",
    homeAddress: "",
    programme: "",
    occupation: "",
    education: "",
    classOfDegree: "",
    instituitionAttended: "",
    yearOfGraduation: "",
    computerSkill: "",
    softwareUsed: "",
    softwareTraining: "",
    applicationYouWillBuild: "",
    techStack: "",
    preferredJob: "",
    workSector: "",
    reasonForScholarship: "",
    commitment: "",
    programmeId: null,
  });

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  console.log(formData);
  const steps = [
    {
      title: "Select Programme",
      content: <Track state={formData} setState={setFormData} />,
    },
    {
      title: "Personal Information",
      content: <PersonalInfo state={formData} setState={setFormData} />,
    },
    {
      title: "Education Details",
      content: <EducationDetails state={formData} setState={setFormData} />,
    },
    {
      title: "Other Details",
      content: <OtherDetails state={formData} setState={setFormData} />,
    },

    // ... Add more steps as needed
  ];

  const handleNextClick = async () => {
    try {
      await form.validateFields();
      setCurrentStep(currentStep + 1);
    } catch (errorInfo) {
      console.log(errorInfo);
    }
  };

 /*  const checkDuplicateEmail = async (email) => {
    try {
      const response = await axios.get(
         import.meta.env.VITE_APP_SSMP_BACKEND_API,"/${email}"
        // "${import.meta.env.VITE_APP_SSMP_BACKEND_API}, ${"
      );
      return response.data.exists;
    } catch (error) {
      console.error("Error checking email:", error);
      return false;
    }
  }; */

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    /*    
    // Check if the email already exists on the server
    const isDuplicateEmail = await checkDuplicateEmail(formData.email);
    if (isDuplicateEmail) {
      message.error("This email has already been used. Please use a different email.");
      return;
    } */
      const formattedDob = formData.dob ? dayjs(formData.dob).format('YYYY-MM-DD') : null;
console.log(formattedDob);
    const dataToSend = {
      ...formData,
      dob: formattedDob, }
      console.log(dataToSend);
      const formDataJSON = JSON.stringify(dataToSend);
      console.log(formDataJSON);
      const response = await axios.post(import.meta.env.VITE_APP_SSMP_BACKEND_API, formDataJSON,{
        headers: {
          "Content-Type":"application/json"
        }
      });
      
      console.log("Server Response:", response.data);
      setResponseMessage(response.data.message);
      setModalVisible(true);

      // Reset the form after successful submission
      form.resetFields();
      setCurrentStep(0);
      message.success("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("You cannot register more than once");
      setResponseMessage("An error occurred. Please try again later.",error);
    setModalVisible(true);
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setResponseMessage(""); // Clear the response message
    message.info("Response message acknowledged");
  };


  return (
    <div className="p-5">
      <div className="">
        <img src={image} alt="logo" className="w-[10rem]" />
      </div>
      <div className="">
        <h1 className="text-center font-bold font-[poppins-extra-bold] text-2xl mt-5 lg:text-5xl text-[#0f4b93]">
          Registration Form
        </h1>
        <Form
          form={form}
          layout="vertical"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          className="md:w-[90%] mx-auto mt-20 flex flex-col items-center justify-center xl:w-[60%]"
        >
          <Steps
            current={currentStep}
            responsive
            items={steps}
            className="mb-20"
          />

          {steps[currentStep].content}
          <div style={{ marginTop: 24 }}>
            {currentStep < steps.length - 1 && formData.programmeId && (
              <Button
                type="primary"
                className="bg-[#0f4b93]"
                onClick={handleNextClick}
                disabled={form
                  .getFieldError()
                  .some((field) => field.errors.length > 0)}
              >
                Next
              </Button>
            )}
            {currentStep === steps.length - 1 && (
              <Button
                type="primary"
                onClick={handleSubmit}
                className="bg-[#0f4b93]"
              >
                Done
              </Button>
            )}
            {currentStep > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={prev}>
                Previous
              </Button>
            )}
          </div>
          
        </Form>
         {/* Modal for displaying the response message */}
         {/* <Modal
        title="Form Submission Result"
        open={modalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="ok" type="primary" onClick={handleModalClose}>
            OK
          </Button>,
        ]}
      >
        {responseMessage}
      </Modal> */}
      </div>
    </div>
  );
}

export default Enrollment;
