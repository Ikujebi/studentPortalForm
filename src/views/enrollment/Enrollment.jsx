import { useState } from "react";
import { Form, Button, Steps, message } from "antd";
import PersonalInfo from "./component/PersonalInfo";
import EducationDetails from "./component/EducationDetails";
import OtherDetails from "./component/OtherDetails";
import Track from "./component/Track";
import image from "../../assets/images/saillab.png";
import axios from "axios";

function Enrollment() {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(process.env.SSMP_BACKEND_API, formData);
      console.log("Server Response:", response.data);
      // Reset the form after successful submission
      form.resetFields();
      setCurrentStep(0);
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("An error occured, please try again");
    }
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
          className="md:w-[70%] mx-auto mt-20 flex flex-col items-center justify-center"
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
      </div>
    </div>
  );
}

export default Enrollment;
