import { Form, Input, Button,  Select } from "antd";
import { useState } from "react";

function PersonalInfo() {
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
      const [form] = Form.useForm();
      const [currentStep, setCurrentStep] = useState(0);

      const handleChange = (name, value) => {
        if (!/\d/.test(value)) {
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }
      };
  return (
    
<div>
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
          <Input className="input" type="text" onChange={handleChange} value={formData.firstName} />
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
          className="input"
            type="text"
            onChange={handleChange}
            value={formData.lastName}
          />
        </Form.Item>
        <Form.Item
          label="Phone No."
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Phone number is required",
            },
          ]}
        >
          <Input
          className="input"
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
          className="input"
            type="email"
            onChange={handleChange}
            value={formData.email}
          />
        </Form.Item>
        <Form.Item
        className="input"
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
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="binary">Non-Binary</Select.Option>
            <Select.Option value="others">other</Select.Option>
          </Select>
        </Form.Item>
        </div>
  )
}

export default PersonalInfo