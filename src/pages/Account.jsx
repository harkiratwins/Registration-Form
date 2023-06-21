import React from "react";
import { Button, Form, Input, Select, Row, Col } from "antd";

const Account = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { Option } = Select;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Handle registration logic here");
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="login-page">
      <div className="login-box">
        <Form
          name="login-form"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">Let's Create an account</p>
          <br></br>
          <Row>
            <Col span={12}>
              <Form.Item
                label="First Name"
                name="firstname"
                rules={[
                  { required: true, message: "Please enter your firstname!" },
                ]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
              label="Last Name"
              name="lastname"
              rules={[
                { required: true, message: "Please enter your lastname!" },
              ]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input placeholder="E-mail" />
          </Form.Item>

          <Form.Item
            label="Organization"
            name="organization"
            rules={[
              { required: true, message: "Please enter your organization!" },
            ]}
          >
            <Input placeholder="Organization" />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
          label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Password" />
         
          
          
            
          </Form.Item>
         
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
            Already have an account?{" "}
            <a href=" " onClick={handleRegister}>
              sign up
            </a>
          </Form.Item>
         
            
        </Form>
      </div>
    </div>
  );
};
export default Account;
