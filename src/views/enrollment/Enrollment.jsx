import { useState } from "react";
import { Form, Button, Steps,message } from "antd";
import PersonalInfo from "./component/PersonalInfo";
import EducationDetails from "./component/EducationDetails";
import OtherDetails from "./component/OtherDetails";
import Track from "./component/Track";
import image from "../../assets/images/saillab.png";
const { Step } = Steps;
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

console.log(formData)
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
      content: <EducationDetails />,
    },
    {
      title: "Other Details",
      content: <OtherDetails />,
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
              <Button type="primary" className="bg-[#0f4b93]" onClick={handleNextClick}
              disabled={form.getFieldError().some((field)=> field.errors.length > 0)}>
                Next
              </Button>
            )}
            {currentStep === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
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
 