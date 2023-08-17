import { Col, DatePicker, Form, Input, Row, Select } from "antd";
import useSetField from "../../../custom-hooks/useSetField.js";

function PersonalInfo({ state, setState }) {
  const { setRequest } = useSetField(setState);
  return (
    <Row gutter={16} className="md:w-[70%]">
      <Col xs={24} md={12}>
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
          <Input
            type="text"
            onChange={(e) => setRequest("firstName", e.target.value)}
            value={state.firstName}
          />
        </Form.Item>
      </Col>
      <Col xs={24} md={12}>
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
            onChange={(e) => setRequest("lastName", e.target.value)}
            value={state.lastName}
          />
        </Form.Item>
      </Col>
      <Col xs={24} md={12}>
        <Form.Item
          label="Phone No."
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Phone number is required",
            },
            {
              pattern: /^[0-9][\d]{10}$/,
              message: 'Invalid phone number'
            }
          ]}
        >
          <Input
            type="tel"
            onChange={(e) => setRequest("phoneNumber", e.target.value)}
            value={state.phoneNumber}
          />
        </Form.Item>
      </Col>
      <Col xs={24} md={12}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Email is required",
            },
            {
              pattern: /^[\w\.-]+@\w+\.\w+(\.\w+)?$/,
              message: "Invalid email format",
            }
          ]}
        >
          <Input
            type="email"
            onChange={(e) => setRequest("email", e.target.value)}
            value={state.email}
          />
        </Form.Item>
      </Col>
      <Col xs={24} md={12}>
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
          <Select onChange={(e) => setRequest("sex", e)} value={state.sex}>
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="binary">Non-Binary</Select.Option>
            <Select.Option value="others">other</Select.Option>
          </Select>
        </Form.Item>
      </Col>
      <Col xs={24} md={12}>
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
            format="YYYY-MM-DD" // Date format as needed
            className="w-full"
            onChange={(e) => setRequest("dob", e)}
            value={state.dob}
          />
        </Form.Item>
      </Col>
      <Col xs={24} md={12}>
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
          onChange={(e) => setRequest("email", e.target.value)}
          value={state.occupation}
        />
      </Form.Item>
      </Col>
      <Col xs={24} md={12}>
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
          value={state.location}
          onChange={(e) => setRequest("email", e)}
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
      </Col>
      <Col xs={24} md={12}>
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
          onChange={(e) => setRequest("email", e.target.value)}
          value={state.homeAddress}
        />
      </Form.Item>
      </Col>
    </Row>
  );
}

export default PersonalInfo;
