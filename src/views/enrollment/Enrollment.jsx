import { useState } from "react";
import { Form, Button, Steps, Spin } from "antd";
import PersonalInfo from "./component/PersonalInfo";
import EducationDetails from "./component/EducationDetails";
import OtherDetails from "./component/OtherDetails";
import Track from "./component/Track";
import image from "../../assets/images/saillab.png";
import axios from "axios";
import ResponseModal from "../../common/response-modal";

function Enrollment() {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async () => {
    setLoading(true);
    // const formattedDob = dayjs(formData.dob).format("YYYY-MM-DD");
    try {
      const response = await axios.post(
        import.meta.env.VITE_APP_SSMP_BACKEND_API + "enrollParticipants",
       
        { ...formData, dob: formData.dob.toISOString()}
      );
      setMessage(response.data.responseMessage?.toUpperCase());
      // Reset the form after successful submission
      form.resetFields();
      setCurrentStep(0);
      setOpen(true);
      setLoading(false);
    } catch (error) {
      setOpen(true);
      setLoading(false);
      setMessage(error);
    }
  };

  return (
    <Spin tip="Processing..." spinning={loading}>
      <div className="p-5">
        <ResponseModal
          open={open}
          setOpen={setOpen}
          message={message}
          description={"You have successfully enrolled for the SAIL Tech Talent programme, a mail will be sent to your inbox for confirmation"}
        />
        <header className="fixed z-10 top-0 left-0 w-full bg-white text-center py-2 mb-10">
          <img src={image} alt="logo" className="w-[10rem]" />
          <h1 className="text-center font-bold font-[poppins-extra-bold] text-3xl mt-5 lg:text-5xl text-[#0f4b93]">
            Registration Form
          </h1>
        </header>
        <div className=" mt-[7.23rem]">
          
          <Form
            form={form}
            layout="vertical"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            onFinish={handleSubmit}
            className="md:w-[90%] mx-auto mt-5 md:mt-14 flex flex-col items-center justify-center xl:w-[60%]"
            fields={[
              {
                name: "firstName",
                value: formData.firstName,
              },
              {
                name: "lastName",
                value: formData.lastName,
              },
              {
                name: "email",
                value: formData.email,
              },
              {
                name: "phoneNumber",
                value: formData.phoneNumber,
              },
              {
                name: "sex",
                value: formData.sex,
              },
              {
                name: "dob",
                value: formData.dob,
              },
              {
                name: "lga",
                value: formData.lga,
              },
              {
                name: "homeAddress",
                value: formData.homeAddress,
              },
              {
                name: "programme",
                value: formData.programme,
              },
              {
                name: "occupation",
                value: formData.occupation,
              },
              {
                name: "education",
                value: formData.education,
              },
              {
                name: "classOfDegree",
                value: formData.classOfDegree,
              },
              {
                name: "instituitionAttended",
                value: formData.instituitionAttended,
              },
              {
                name: "yearOfGraduation",
                value: formData.yearOfGraduation,
              },
              {
                name: "computerSkill",
                value: formData.computerSkill,
              },
              {
                name: "softwareUsed",
                value: formData.softwareUsed,
              },
              {
                name: "softwareTraining",
                value: formData.softwareTraining,
              },
              {
                name: "applicationYouWillBuild",
                value: formData.applicationYouWillBuild,
              },
              {
                name: "techStack",
                value: formData.techStack,
              },
              {
                name: "preferredJob",
                value: formData.preferredJob,
              },
              {
                name: "workSector",
                value: formData.workSector,
              },
              {
                name: "reasonForScholarship",
                value: formData.reasonForScholarship,
              },
              {
                name: "commitment",
                value: formData.commitment,
              },
              {
                name: "programmeId",
                value: formData.programmeId,
              },
            ]}
          > <div className="w-full">
            <Steps
              current={currentStep}
              responsive={false}
              items={steps.map(step => ({ title: step.title }))}
              className="mb-5 md:mb-14 "

            />
            </div>

            {steps[currentStep].content}
            
            <div
              style={{ marginTop: 24 }}
              className="flex items-center justify-between"
            >
              {currentStep > 0 && (
                <Button
                  style={{ margin: "0 8px" }}
                  className="px-14 flex items-center justify-center py-5"
                  onClick={prev}
                >
                  Previous
                </Button>
              )}

              {currentStep < steps.length - 1 && formData.programmeId && (
                <Button
                  type="primary"
                  className="bg-[#0f4b93] px-14 flex items-center justify-center py-5"
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
                  htmlType="submit"
                  className="bg-[#0f4b93] px-14 flex items-center justify-center py-5"
                >
                  Done
                </Button>
              )}
              
            </div>
          </Form>
        </div>
      </div>
    </Spin>
  );
}

export default Enrollment;
