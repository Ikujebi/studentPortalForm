/* 
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
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="binary">Non-Binary</Option>
            <Option value="others">other</Option>
          </Select>
        </Form.Item>
        <Form.Item>
            <Button type="primary" onClick={handleNextClick}>
              Next
            </Button>
          </Form.Item>
        </div> */