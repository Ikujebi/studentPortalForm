import { Form, Input, Col,  Select, Row } from "antd";
import useSetField from "../../../custom-hooks/useSetField.js";

function OtherDetails({state,setState}) {
  const { setRequest } = useSetField(setState);
     
   
  return (
    <>{state.programmeId === 1 ? (
      <Row gutter={16} className="md:w-[70%]">
      
        
        
        
        
      <Col xs={24} md={12}>
        <Form.Item
      className="input"
        label="Which stack of tech talent are you intrested in?"
        name="techStack"
        rules={[
          {
            required: true,
            message: "Intrested techStack is required",
          },
        ]}
      >
        <Select
          value={state?.techStack}
          onChange={(e) => setRequest("techStack", e)}
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
      </Col>
      
      <Col xs={24} md={12}>
      <Form.Item
        label="What type of Job would you like to get after this programme"
        name="preferredJob"
        rules={[
          {
            required: true,
            message: "Dream job is required",
          },
        ]}
      >
        <Input
        className="input"
          name="preferredJob"
          onChange={setRequest}
          value={state?.preferredJob}
        />
      </Form.Item>
      </Col>
      <Col xs={24} md={12}>
      <Form.Item
      className="input"
        label="Which sector would you like to work after your training"
        name="workSector"
        rules={[
          {
            required: true,
            message: "Intrested sector is required",
          },
        ]}
      >
        <Select
          value={state?.workSector}
          onChange={(e) => setRequest("workSector", e.target.value)}
          
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
      </Col>
      
      <Col xs={24} md={12}>
      <Form.Item
      className="input"
        label="Are you able to commit to attending the program for 6 months if selected (fully onsite)"
        name="commitment"
      >
        <Select
          value={state?.commitment}
          onChange={(e) => setRequest("commitment", e)}
        >
          <Select.Option value="yes">Yes</Select.Option>
          <Select.Option value="no">No</Select.Option>
        </Select>
      </Form.Item>
      </Col>
      <Col xs={24} md={12}>
      <Form.Item
        label="If you had programming skills, briefly describe a web application you would build?"
        name="applicationYouWillBuild"
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
          name="applicationYouWillBuild"
          onChange={setRequest}
          value={state?.applicationYouWillBuild}
        />
      </Form.Item>
      </Col>
      <Col xs={24} md={12}>
      <Form.Item
        label="Briefly tell us why the team should grant you this scholarship."
        name="reasonForScholarship"
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
          name="reasonForScholarship"
          onChange={setRequest}
          value={state?.reasonForScholarship}
        />
      </Form.Item>
      </Col>
      </Row>
    ) : state.programmeId === 2 ? (
      <Row gutter={16} className="md:w-[70%]">
        STEM Content Here
      </Row>
    ) : (
      <Row gutter={16} className="md:w-[70%]">
        Data Science Content Here
      </Row>
    )}
    
</>
  );
}

export default OtherDetails