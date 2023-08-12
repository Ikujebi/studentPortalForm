import { Form, Input, Button,  Select } from "antd";
import { useState } from "react";

function EducationDetails() {
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
  return (
    <div>
          <Form.Item
          className="input"
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
            <Select.Option value="primary">Primary School</Select.Option>
            <Select.Option value="ssce">Secondary School (SSCE)</Select.Option>
            <Select.Option value="ond">Ordinary National Diploma (OND)</Select.Option>
            <Select.Option value="hnd">Higher National Diploma (HND)</Select.Option>
            <Select.Option value="bsc">Bachelor's Degree (BSc)</Select.Option>
            <Select.Option value="msc">Master's Degree (MSc)</Select.Option>
            <Select.Option value="phd">Doctorate (PhD)</Select.Option>
          </Select>
        </Form.Item>
          <Form.Item
          className="input"
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
            <Select.Option value="firstClass">First Class</Select.Option>
            <Select.Option value="2ndClassU">2nd Class Upper</Select.Option>
            <Select.Option value="2ndClass">2nd Class Lower</Select.Option>
            <Select.Option value="3rdClass">3rd Class</Select.Option>
            <Select.Option value="Pass">Pass</Select.Option>
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
          className="input"
            name="schoolName"
            onChange={handleChange}
            value={formData.schoolName}
          />
        </Form.Item>

        <Form.Item label="What year did you graduate" name="graduation">
          <Input
          className="input"
            name="graduation"
            onChange={handleChange}
            value={formData.graduation}
          />
        </Form.Item>
        </div>
  )
}

export default EducationDetails