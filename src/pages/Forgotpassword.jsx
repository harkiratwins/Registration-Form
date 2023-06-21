import React from "react";
import { Button, Form, Input } from "antd";

const Forgotpassword = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
          <p className="form-title">Forgot password</p>
          <p>please enter your email you use to sign in to Gaize</p>
          <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input placeholder="E-mail" />
          </Form.Item>

          <br></br>
          
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Send Reset Email
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Forgotpassword;
