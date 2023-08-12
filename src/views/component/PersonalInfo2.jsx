import { Form, Input, Button, Select, DatePicker } from "antd";
import { useState } from "react";

function PersonalInfo2() {
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
        label="Occupation"
        name="occupation"
        rules={[
          {
            required: true,
            message: "Occupation is required",
          },
        ]}
      >
        <Input
          className="input"
          onChange={handleChange}
          value={formData.occupation}
        />
      </Form.Item>
      <Form.Item
        className="input"
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
          <Select.Option value="ikorodu">
            Ikorodu Local Government
          </Select.Option>
          <Select.Option value="shomolu">
            Shomolu Local Government
          </Select.Option>
          <Select.Option value="epe">Epe Local Goverment</Select.Option>
          <Select.Option value="ibeju">
            Ibeju-Lekki Local Government
          </Select.Option>
          <Select.Option value="kosofe">Kosofe Local Government</Select.Option>
          <Select.Option value="alimosho">
            Alimosho Local Government
          </Select.Option>
          <Select.Option value="mushin">Mushin Local Government</Select.Option>
          <Select.Option value="oshodi">
            Oshodi-Isolo Local Government
          </Select.Option>
          <Select.Option value="ojo">Ojo Local Government</Select.Option>
          <Select.Option value="surulere">
            Surulere Local Government
          </Select.Option>
          <Select.Option value="ifako">
            Ifako-Ijaye Local Government
          </Select.Option>
          <Select.Option value="agege">Agege Local Government</Select.Option>
          <Select.Option value="amuwo">
            Amuwo-Odofin Local Government
          </Select.Option>
          <Select.Option value="mainland">
            Lagos Mainland Local Government
          </Select.Option>
          <Select.Option value="ikeja">Ikeja Local Government</Select.Option>
          <Select.Option value="etiOsa">Eti-Osa Local Government</Select.Option>
          <Select.Option value="badagry">
            Badagry Local Government
          </Select.Option>
          <Select.Option value="apapa">Apapa Local Government</Select.Option>
          <Select.Option value="island">
            Lagos Island Local Government
          </Select.Option>
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
          className="input"
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
          format="YYYY-MM-DD" // Date format as needed
        />
      </Form.Item>
    </div>
  );
}

export default PersonalInfo2;
