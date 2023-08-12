import { Form, Input, Button,  Select } from "antd";
import { useState } from "react";

function OtherDetails2() {
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
          className="input"
            name="jobWouldGet"
            onChange={handleChange}
            value={formData.jobWouldGet}
          />
        </Form.Item>

        <Form.Item
        className="input"
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
            <Select.Option value="fintech">Fintech</Select.Option>
            <Select.Option value="insurance">Insurance</Select.Option>
            <Select.Option value="health">Health Tech</Select.Option>
            <Select.Option value="education">Banking</Select.Option>
            <Select.Option value="banking">Education</Select.Option>
            <Select.Option value="aviation">Aviation</Select.Option>
            <Select.Option value="aviation">Other</Select.Option>
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
          className="input"
            rows={4}
            name="whyscholarship"
            onChange={handleChange}
            value={formData.whyscholarship}
          />
        </Form.Item>

        <Form.Item
        className="input"
          label="Are you able to commit to attending the program for 6 months if selected (fully onsite)"
          name="commitment"
        >
          <Select
            value={formData.commitment}
            onChange={(value) => handleChange("commitment", value)}
          >
            <Select.Option value="yes">Yes</Select.Option>
            <Select.Option value="no">No</Select.Option>
          </Select>
        </Form.Item>
        </div>
  )
}

export default OtherDetails2