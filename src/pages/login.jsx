// import React from "react";
import { useState } from "react";
import { Button, Form, Input } from "antd";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [firstname, setFirstName] = useState("");
  const [error, setError] = useState("");
  // const [form] = Form.useForm();

  const navigate = useNavigate()
  
  const onFinish = (values) => {
    debugger
      alert(error);
      navigate("/account");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

 

  // const handleForgotPassword = (e) => {
  //   e.preventDefault();
  //   console.log("Handle password recovery logic here");
  // };
  return (
    <div className="login-page">
      <div className="login-box">
        <Form
          name="login-form"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          // form={form}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">Login</p>
          <p>please enter your email address and password to login</p>
          <Form.Item
          label="E-mail"
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input placeholder="E-mail" onChange={(e) => {
              debugger
              const value = e.target.value
              setFirstName(value)
              value==="" && setError("firstname")}} />
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
              // onClick={onFinish}
            >
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
