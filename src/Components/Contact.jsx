import React from "react";
import { Form, Input, Button, Row, Col, Typography, Space } from "antd";
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Contact = () => {
  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-28 px-4">
      <div className="mx-auto max-w-6xl p-8 bg-white shadow-lg rounded-lg">
        <Title level={2} className="text-center text-gray-900 mb-6">Contact Us 💬</Title>
        <Paragraph className="text-center text-gray-600 mb-12">
          We’d love to hear from you! Fill out the form below and our team will get back to you shortly.
          
        </Paragraph>

        <Row gutter={[32, 32]} justify="center">
          {/* Contact Form */}
          <Col xs={24} md={12}>
            <Form layout="vertical" onFinish={handleSubmit} className="space-y-6">
              <Form.Item
                label="Your Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="Enter your full name" className="rounded-md" />
              </Form.Item>

              <Form.Item
                label="Email Address"
                name="email"
                rules={[{ required: true, message: "Please enter your email" }]}
              >
                <Input placeholder="Enter your email address" className="rounded-md" />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: "Please enter your message" }]}
              >
                <Input.TextArea rows={6} placeholder="Write your message here" className="rounded-md" />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                className="w-full py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Send Message
              </Button>
            </Form>
          </Col>

          {/* Contact Details */}
          <Col xs={24} md={10} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <Title level={4} className="text-gray-800 mb-6">Get in Touch</Title>
            <Space direction="vertical" size="large" className="text-gray-600">
              <Paragraph className="flex items-center">
                <MailOutlined className="mr-2" />
                support@mktstore.com
              </Paragraph>
              <Paragraph className="flex items-center">
                <PhoneOutlined className="mr-2" />
                +123 456 7890
              </Paragraph>
              <Paragraph className="flex items-center">
                <EnvironmentOutlined className="mr-2" />
                MK Shopping Store, Karachi, Pakistan
              </Paragraph>
              <Paragraph>
                <strong>Working Hours:</strong>
                <br />
                Mon - Fri: 9:00 AM - 6:00 PM
                <br />
                Sat-Sun: Closed
              </Paragraph>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
