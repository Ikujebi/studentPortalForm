import { Form, Input, Col,  Select, Row, DatePicker } from "antd";
import useSetField from "../../../custom-hooks/useSetField.js";

function EducationDetails({state,setState}) {
  const { setRequest } = useSetField(setState);
  return (
    <Row gutter={16} className="md:w-[70%]">
      <Col xs={24} md={12}>
      <Form.Item
          className="input"
          label="Tell us your highest level of education"
          name="education"
          rules={[
            {
              required: true,
              message: "highest level of education is required",
            },
          ]}
        >
          <Select
            name="education"
            value={state?.education}
            onChange={(e) => setRequest("education", e)}
            
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
      </Col>
      <Col xs={24} md={12}>
      <Form.Item
          className="input"
          label="Class of degree (B.Sc / HND)"
          name="classOfDegree"
          rules={[
            {
              required: true,
              message: "Class of degree is required",
            },
          ]}
        >
          <Select
            value={state?.classOfDegree}
            onChange={(e) => setRequest("classOfDegree", e)}
            
          >
            <Select.Option value="firstClass">First Class</Select.Option>
            <Select.Option value="2ndClassU">2nd Class Upper</Select.Option>
            <Select.Option value="2ndClass">2nd Class Lower</Select.Option>
            <Select.Option value="3rdClass">3rd Class</Select.Option>
            <Select.Option value="Pass">Pass</Select.Option>
          </Select>
        </Form.Item>
      </Col>
      <Col xs={24} md={12}>
      <Form.Item
          label="Name of Higher Institution attended"
          name="instituitionAttended"
          rules={[
            {
              required: true,
              message: "Name of Higher Institution is required",
            },
          ]}
        >
          <Input
          className="input"
            name="instituitionAttended"
            onChange={setRequest}
            value={state?.instituitionAttended}
          />
        </Form.Item>
      </Col>
      <Col xs={24} md={12}>
      <Form.Item label="What year did you graduate" name="graduation">
      <DatePicker
            picker="year"  // This sets the picker to only select years
            name="yearOfGraduation"
            onChange={(date, dateString) => setRequest("yearOfGraduation", dateString)}
            value={state?.yearOfGraduation}
          />
        </Form.Item>
      </Col>
         
          
      <Col xs={24} md={12}>
      <Form.Item
          className="input"
          label="How would you describe your Computer Skills"
          name="computerSkill"
          rules={[
            {
              required: true,
              message: "describption of Computer Skills is required",
            },
          ]}
        >
          <Select
            name="computerSkill"
            value={state?.computerSkill}
            onChange={(e) => setRequest("computerSkill", e.target.value)}
            
          >
            <Select.Option value="notfam">I am not familiar with computer</Select.Option>
            <Select.Option value="beginner">Beginner</Select.Option>
            <Select.Option value="familiar">I am familiar with computer</Select.Option>
          </Select>
        </Form.Item>
      </Col>
     
      <Col xs={24} md={12}>
      <Form.Item
        
          label="Which of these software have you used before"
          name="softwareUsed"
          rules={[
            {
              required: true,
              message:
                "describption of software have you used before is required",
            },
          ]}
        >
          <Select
            value={state?.softwareUsed}
            onChange={(e) => setRequest("softwareUsed", e.target.value)}
            
          >
            <Select.Option value="microsoft">Microsoft Word</Select.Option>
            <Select.Option value="excel">Excel</Select.Option>
            <Select.Option value="power">Power Point</Select.Option>
            <Select.Option value="corel">Corel Draw</Select.Option>
            <Select.Option value="none">None</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>
      </Col>
        
      <Col xs={24} md={12}>
        <Form.Item
        className="input"
          label="Have you attended any software training before"
          name="softwareTraining"
          rules={[
            {
              required: true,
              message: "software training history is required",
            },
          ]}
        >
          <Select
            value={state?.softwareTraining}
            onChange={(e) => setRequest("softwareTraining", e)}
           
          >
            <Select.Option value="yes">Yes</Select.Option>
            <Select.Option value="no">No</Select.Option>
          </Select>
        </Form.Item>
        </Col>
        
        
        </Row>
  )
}

export default EducationDetails