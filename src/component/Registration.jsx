import React, { useState } from "react";
import { Form, Input, Button, DatePicker, Select } from "antd";
import axios from "axios";
const apiBaseUrl = import.meta.env.SSMP_BACKEND_API;

const { Option } = Select;

function RegistrationForm() {
  const [form] = Form.useForm();
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

  const [showSecondPart, setShowSecondPart] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      dob: date,
    }));
  };

  const handleNextClick = async () => {
    try {
      await form.validateFields(); // Trigger for form validation
      const errors = form.getFieldsError();
      if (errors.filter(({ errors }) => errors.length).length === 0) {
        setShowSecondPart(true);
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

  return (
    <Form
      form={form} 
      layout="vertical"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      onFinish={handleSubmit}
    >
      <div style={{ display: showSecondPart ? "none" : "block" }}>
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: "first name is required",
            },
          ]}
        >
          <Input type="text" onChange={handleChange} value={formData.firstName} />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: "last name is required",
            },
          ]}
        >
          <Input
            type="text"
            onChange={handleChange}
            value={formData.lastName}
          />
        </Form.Item>
        <Form.Item
          label="Phone No."
          name="phone"
          rules={[
            {
              required: true,
              message: "Phone number is required",
            },
          ]}
        >
          <Input
            type="tel"
            onChange={handleChange}
            value={formData.phoneNumber}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Email is required",
            },
          ]}
        >
          <Input
            type="email"
            onChange={handleChange}
            value={formData.email}
          />
        </Form.Item>
        <Form.Item
          label="Sex"
          name="sex"
          rules={[
            {
              required: true,
              message: "Gender type is required",
            },
          ]}
        >
          <Select
            value={formData.sex}
            onChange={(value) => handleChange("sex", value)}
          >
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="binary">Non-Binary</Option>
            <Option value="others">other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Occupation"
          name="ocupation"
          rules={[
            {
              required: true,
              message: "Occupation is required",
            },
          ]}
        >
          <Input
            onChange={handleChange}
            value={formData.occupation}
          />
        </Form.Item>
        <Form.Item
          label="Local Govt Of Residence"
          name="location"
          rules={[
            {
              required: true,
              message: "Local government is required",
            },
          ]}
        >
          <Select
            value={formData.location}
            onChange={(value) => handleChange("location", value)}
          >
            <Option value="ikorodu">Ikorodu Local Government</Option>
            <Option value="shomolu">Shomolu Local Government</Option>
            <Option value="epe">Epe Local Goverment</Option>
            <Option value="ibeju">Ibeju-Lekki Local Government</Option>
            <Option value="kosofe">Kosofe Local Government</Option>
            <Option value="alimosho">Alimosho Local Government</Option>
            <Option value="mushin">Mushin Local Government</Option>
            <Option value="oshodi">Oshodi-Isolo Local Government</Option>
            <Option value="ojo">Ojo Local Government</Option>
            <Option value="surulere">Surulere Local Government</Option>
            <Option value="ifako">Ifako-Ijaye Local Government</Option>
            <Option value="agege">Agege Local Government</Option>
            <Option value="amuwo">Amuwo-Odofin Local Government</Option>
            <Option value="mainland">Lagos Mainland Local Government</Option>
            <Option value="ikeja">Ikeja Local Government</Option>
            <Option value="etiOsa">Eti-Osa Local Government</Option>
            <Option value="badagry">Badagry Local Government</Option>
            <Option value="apapa">Apapa Local Government</Option>
            <Option value="island">Lagos Island Local Government</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Residential Address"
          name="homeAddress"
          rules={[
            {
              required: true,
              message: "Residential Address is required",
            },
          ]}
        >
          <Input
            onChange={handleChange}
            value={formData.homeAddress}
          />
        </Form.Item>
        <Form.Item
          label="Date Of Birth"
          name="dob"
          rules={[
            {
              required: true,
              message: "Date Of Birth is required",
            },
          ]}
        >
          <DatePicker
            name="dob"
            value={formData.dob}
            onChange={handleDateChange}
            format="YYYY-MM-DD" // Date format as needed
          />
        </Form.Item>
        <Form.Item
          label="Tell us your highest level of education"
          name="highEdu"
          rules={[
            {
              required: true,
              message: "highest level of education is required",
            },
          ]}
        >
          <Select
            name="highEdu"
            value={formData.highEdu}
            onChange={(value) => handleChange("highEdu", value)}
          >
            <Option value="primary">Primary School</Option>
            <Option value="ssce">Secondary School (SSCE)</Option>
            <Option value="ond">Ordinary National Diploma (OND)</Option>
            <Option value="hnd">Higher National Diploma (HND)</Option>
            <Option value="bsc">Bachelor's Degree (BSc)</Option>
            <Option value="msc">Master's Degree (MSc)</Option>
            <Option value="phd">Doctorate (PhD)</Option>
          </Select>
        </Form.Item>
        {/* ... other form items (part 1) */}
        <Form.Item>
          <Button type="primary" onClick={handleNextClick} disabled={!form.isFieldsTouched(true) || form.getFieldsError().filter(({ errors }) => errors.length).length > 0}>
            Next
          </Button>
        </Form.Item>
      </div>

      <div style={{ display: showSecondPart ? "block" : "none" }}>
        {/* ... other form items (part 2) */}

        <Form.Item
          label="Class of degree (B.Sc / HND)"
          name="degreeClass"
          rules={[
            {
              required: true,
              message: "Class of degree is required",
            },
          ]}
        >
          <Select
            value={formData.degreeClass}
            // onChange={(value) => handleChange("degreeClass", value)}
          >
            <Option value="firstClass">First Class</Option>
            <Option value="2ndClassU">2nd Class Upper</Option>
            <Option value="2ndClass">2nd Class Lower</Option>
            <Option value="3rdClass">3rd Class</Option>
            <Option value="Pass">Pass</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Name of Higher Institution attended"
          name="schoolName"
          rules={[
            {
              required: true,
              message: "Name of Higher Institution is required",
            },
          ]}
        >
          <Input
            name="schoolName"
            onChange={handleChange}
            value={formData.schoolName}
          />
        </Form.Item>

        <Form.Item label="What year did you graduate" name="graduation">
          <Input
            name="graduation"
            onChange={handleChange}
            value={formData.graduation}
          />
        </Form.Item>

        <Form.Item
          label="How would you describe your Computer Skills"
          name="computerSkills"
          rules={[
            {
              required: true,
              message: "describption of Computer Skills is required",
            },
          ]}
        >
          <Select
            name="computerSkills"
            value={formData.computerSkills}
            onChange={(value) => handleChange("computerSkills", value)}
          >
            <Option value="">I am not familiar with computer</Option>
            <Option value="2ndClass">Beginner</Option>
            <Option value="2ndClass">I am familiar with computer</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Which of these software have you used before"
          name="usedSoftware"
          rules={[
            {
              required: true,
              message:
                "describption of software have you used before is required",
            },
          ]}
        >
          <Select
            value={formData.degreeClass}
            onChange={(value) => handleChange("usedSoftware", value)}
          >
            <Option value="microsoft">Microsoft Word</Option>
            <Option value="excel">Excel</Option>
            <Option value="power">Power Point</Option>
            <Option value="corel">Corel Draw</Option>
            <Option value="none">None</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Have you attended any software training before"
          name="attendSoftware"
          rules={[
            {
              required: true,
              message: "software training history is required",
            },
          ]}
        >
          <Select
            value={formData.attendSoftware}
            onChange={(value) => handleChange("attendSoftware", value)}
          >
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="If you had programming skills, briefly describe a web application you would build?"
          name="biuldWithSkills"
          rules={[
            {
              required: true,
              message: "Dream web application is required",
            },
          ]}
        >
          <Input.TextArea
            rows={4}
            name="biuldWithSkills"
            onChange={handleChange}
            value={formData.biuldWithSkills}
          />
        </Form.Item>

        <Form.Item
          label="Which stack of tech talent are you intrested in?"
          name="usedSoftware"
          rules={[
            {
              required: true,
              message: "Intrested stack is required",
            },
          ]}
        >
          <Select
            value={formData.stack}
            onChange={(value) => handleChange("stack", value)}
          >
            <Option value="microsoft">Frontend</Option>
            <Option value="excel">Designs</Option>
            <Option value="power">Backend</Option>
            <Option value="corel">Full stack</Option>
            <Option value="none">Dev Ops</Option>
            <Option value="none">Microsoft Trainings</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="What type of Job would you like to get after this programme"
          name="jobWouldGet"
          rules={[
            {
              required: true,
              message: "Dream job is required",
            },
          ]}
        >
          <Input
            name="jobWouldGet"
            onChange={handleChange}
            value={formData.jobWouldGet}
          />
        </Form.Item>

        <Form.Item
          label="Which sector would you like to work after your training"
          name="sector"
          rules={[
            {
              required: true,
              message: "Intrested sector is required",
            },
          ]}
        >
          <Select
            value={formData.sector}
            onChange={(e) => handleChange("sector", e.target.value)}
          >
            <Option value="fintech">Fintech</Option>
            <Option value="insurance">Insurance</Option>
            <Option value="health">Health Tech</Option>
            <Option value="education">Banking</Option>
            <Option value="banking">Education</Option>
            <Option value="aviation">Aviation</Option>
            <Option value="aviation">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Briefly tell us why the team should grant you this scholarship."
          name="whyscholarship"
          rules={[
            {
              required: true,
              message: "Reason for intrest is required",
            },
          ]}
        >
          <Input.TextArea
            rows={4}
            name="whyscholarship"
            onChange={handleChange}
            value={formData.whyscholarship}
          />
        </Form.Item>

        <Form.Item
          label="Are you able to commit to attending the program for 6 months if selected (fully onsite)"
          name="commitment"
        >
          <Select
            value={formData.commitment}
            onChange={(value) => handleChange("commitment", value)}
          >
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}

export default RegistrationForm;
