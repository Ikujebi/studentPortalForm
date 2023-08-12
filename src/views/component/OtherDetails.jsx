import { Form, Input, Button,  Select } from "antd";
import { useState } from "react";

function OtherDetails() {
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
            <Select.Option value="">I am not familiar with computer</Select.Option>
            <Select.Option value="2ndClass">Beginner</Select.Option>
            <Select.Option value="2ndClass">I am familiar with computer</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
        className="input"
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
            <Select.Option value="microsoft">Microsoft Word</Select.Option>
            <Select.Option value="excel">Excel</Select.Option>
            <Select.Option value="power">Power Point</Select.Option>
            <Select.Option value="corel">Corel Draw</Select.Option>
            <Select.Option value="none">None</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
        className="input"
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
            <Select.Option value="yes">Yes</Select.Option>
            <Select.Option value="no">No</Select.Option>
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
          className="input"
            rows={4}
            name="biuldWithSkills"
            onChange={handleChange}
            value={formData.biuldWithSkills}
          />
        </Form.Item>

        <Form.Item
        className="input"
          label="Which stack of tech talent are you intrested in?"
          name="stack"
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
            <Select.Option value="microsoft">Frontend</Select.Option>
            <Select.Option value="excel">Designs</Select.Option>
            <Select.Option value="power">Backend</Select.Option>
            <Select.Option value="corel">Full stack</Select.Option>
            <Select.Option value="none">Dev Ops</Select.Option>
            <Select.Option value="none">Microsoft Trainings</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>
        </div>
  )
}

export default OtherDetails