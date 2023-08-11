import React, { useState } from "react";
import { Form, Input, Button, DatePicker, Select } from "antd";

const { Option } = Select;

function RegistrationForm() {
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
    classOfDeg:""
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

  const handleNextClick = () => {
    setShowSecondPart(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form values:", formData);
    // Handle form submission logic here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ display: showSecondPart ? "none" : "block" }}>
        <Form.Item label="First Name" name="firstName" rules={[{
          required:true, message:"first name is required"
        }]}>
          <Input name="firstName" onChange={handleChange} value={formData.firstName} />
        </Form.Item>
        <Form.Item label="Last Name" name="lastName" required>
          <Input name="firstName" onChange={handleChange} value={formData.firstName} />
        </Form.Item>
        <Form.Item label="Phone No." name="phone" required>
          <Input name="phoneNumber" onChange={handleChange} value={formData.phoneNumber} />
        </Form.Item>
        <Form.Item label="Email" name="email" required>
          <Input name="email" type="email" onChange={handleChange} value={formData.email} />
        </Form.Item>
        <Form.Item label="Sex" name="sex" required>
          <Input name="sex" onChange={handleChange} value={formData.sex} />
        </Form.Item>
        <Form.Item label="Occupation" name="ocupation" required>
          <Input name="occupation" onChange={handleChange} value={formData.occupation} />
        </Form.Item>
        <Form.Item label="Local Govt Of Residence" name="location" required>
          
          <Select
          name="location"
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
        <Form.Item label="Residential Address" name="homeAddress" required>
          <Input name="homeAddress" onChange={handleChange} value={formData.homeAddress} />
        </Form.Item>
        <Form.Item label="Date Of Birth" name="dob" required>
  <DatePicker
    name="dob"
    value={formData.dob}
    onChange={handleDateChange}
    format="YYYY-MM-DD" // Date format as needed
  />
</Form.Item>
        <Form.Item label="Tell us your highest level of education" name="highEdu" required>
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
          <Button type="primary" onClick={handleNextClick}>
            Next
          </Button>
        </Form.Item>
      </div>

      <div style={{ display: showSecondPart ? "block" : "none" }}>
        {/* ... other form items (part 2) */}

        <Form.Item label="Class of degree (B.Sc / HND)" name="degreeClass" required>
      <Select
      name="degreeClass"
        value={formData.degreeClass}
        onChange={(value) => handleChange("degreeClass", value)}
      >
        <Option value="">First Class</Option>
        <Option value="2ndClass">2nd Class Upper</Option>
        <Option value="2ndClass">2nd Class Lower</Option>
        <Option value="3rdClass">3rd Class</Option>
        <Option value="Pass">Pass</Option>
      </Select>
    </Form.Item>

    <Form.Item label="Name of Higher Institution attended" name="schoolName" required>
          <Input name="schoolName" onChange={handleChange} value={formData.schoolName} />
        </Form.Item>
        
        <Form.Item label="What year did you graduate" name="graduation" >
          <Input name="graduation" onChange={handleChange} value={formData.graduation} />
        </Form.Item>
        
        <Form.Item label="How would you describe your Computer Skills" name="computerSkills" required>
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
        <Form.Item label="Which of these software have you used before" name="usedSoftware" required>
        <Select
        value={formData.degreeClass}
        onChange={(value) => handleChange("usedSoftware", value)}>
        <Option value="microsoft">Microsoft Word</Option>
        <Option value="excel">Excel</Option>
        <Option value="power">Power Point</Option>
        <Option value="corel">Corel Draw</Option>
        <Option value="none">None</Option>
        <Option value="other">Other</Option>
      </Select>
        </Form.Item>
        
        <Form.Item label="Have you attended any software training before" name="attendSoftware" required>
        <Select
        value={formData.attendSoftware}
        onChange={(value) => handleChange("attendSoftware", value)}>
        <Option value="yes">Yes</Option>
        <Option value="no">No</Option> 
      </Select>
        </Form.Item>

        <Form.Item label="If you had programming skills, briefly describe a web application you would build?" name="biuldWithSkills" required>
          <Input.TextArea rows={4} name="biuldWithSkills" onChange={handleChange} value={formData.biuldWithSkills} />
        </Form.Item>

        <Form.Item label="Which stack of tech talent are you intrested in?" name="usedSoftware" required>
        <Select
        value={formData.stack}
        onChange={(value) => handleChange("stack", value)}>
        <Option value="microsoft">Frontend</Option>
        <Option value="excel">Designs</Option>
        <Option value="power">Backend</Option>
        <Option value="corel">Full stack</Option>
        <Option value="none">Dev Ops</Option>
        <Option value="none">Microsoft Trainings</Option>
        <Option value="other">Other</Option>
      </Select>
        </Form.Item>

        <Form.Item label="What type of Job would you like to get after this programme" name="jobWouldGet" required>
          <Input name="jobWouldGet" onChange={handleChange} value={formData.jobWouldGet} />
        </Form.Item>

        <Form.Item label="Which sector would you like to work after your training" name="sector" required>
        <Select
        value={formData.sector}
        onChange={(e) => handleChange("sector", e.target.value)}>
        <Option value="fintech">Fintech</Option>
        <Option value="insurance">Insurance</Option>
        <Option value="health">Health Tech</Option> 
        <Option value="education">Banking</Option> 
        <Option value="banking">Education</Option> 
        <Option value="aviation">Aviation</Option> 
        <Option value="aviation">Other</Option> 
      </Select>
        </Form.Item>

        <Form.Item label="Briefly tell us why the team should grant you this scholarship." name="whyscholarship" required>
          <Input.TextArea rows={4} name="whyscholarship" onChange={handleChange} value={formData.whyscholarship} />
        </Form.Item>

        <Form.Item label="Are you able to commit to attending the program for 6 months if selected (fully onsite)" name="commitment" >
        <Select
        value={formData.commitment}
        onChange={(value) => handleChange("commitment", value)}>
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
