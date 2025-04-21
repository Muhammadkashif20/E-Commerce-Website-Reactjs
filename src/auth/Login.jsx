import React from "react";
import { Form, Input, Button, Typography, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const Login = () => {
  const handleSubmit = (values) => {
    console.log("Form Values: ", values);
    message.success("Login successful!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-2xl transition-all duration-300">
        <Title level={2} className="text-center text-blue-600 mb-6">
          Welcome Back 👋
        </Title>
        <Text className="block text-center text-gray-600 mb-6">
          Please enter your login details
        </Text>
        
        <Form layout="vertical" onFinish={handleSubmit} className="space-y-4">
          {/* Email or Username */}
          <Form.Item
            label="Username or Email"
            name="username"
            rules={[
              { required: true, message: "Please enter your username or email" },
            ]}
          >
            <Input
              size="large"
              placeholder="Enter your username or email"
              prefix={<UserOutlined className="text-gray-400" />}
              className="rounded-lg"
            />
          </Form.Item>

          {/* Password */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter your password" },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Enter your password"
              prefix={<LockOutlined className="text-gray-400" />}
              className="rounded-lg"
            />
          </Form.Item>

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              className="bg-blue-600 hover:bg-blue-700 rounded-lg"
            >
              Login
            </Button>
          </Form.Item>

          {/* Signup Link */}
          <div className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signUp" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
