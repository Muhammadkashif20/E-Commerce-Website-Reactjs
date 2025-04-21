import React from "react";
import { Typography, Row, Col, Space, Button } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-lg shadow-lg">
        {/* Title and introductory text */}
        <Title level={2} className="text-center text-gray-800 mb-8">
          🛒 About Our Store
        </Title>
        <Paragraph className="text-center text-gray-600 mb-12">
          Welcome to MK Shopping – your one-stop online shop for all things tech, fashion, and lifestyle. <br />
          We're passionate about delivering quality products with unbeatable customer service.
        </Paragraph>

        {/* Layout with image and text */}
        <Row gutter={[40, 40]} align="middle" reverse="true">
          {/* Text content section */}
          <Col xs={24} md={12}>
            <Space direction="vertical" size="large" className="text-gray-700 w-full">
              <Title level={4} className="text-gray-800">Who We Are</Title>
              <Paragraph>
                MK Shopping was founded in 2025 with the mission to provide an exceptional online shopping 
                experience. From top electronics to the latest in fashion trends, our products are carefully 
                selected to meet your every need.
              </Paragraph>

              <Title level={4} className="text-gray-800">Our Vision</Title>
              <Paragraph>
                We aim to become the most customer-centric ecommerce platform in Pakistan, offering value, 
                variety, and a seamless shopping journey to all our users.
              </Paragraph>

              <Title level={4} className="text-gray-800">Why Shop With Us?</Title>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Fast and reliable delivery</li>
                <li>Top-rated customer support</li>
                <li>Affordable prices and daily deals</li>
              </ul>

              {/* Call to action button */}
              <div className="mt-8">
                <Title level={5} className="text-gray-800">Let's Get Started</Title>
                <Paragraph>
                  Explore our wide range of products and enjoy an enhanced shopping experience today. We are 
                  just a click away!
                </Paragraph>
                <Button
                  type="primary"
                  size="large"
                  href="/"
                  icon={<RightCircleOutlined />}
                  className="flex items-center gap-2"
                >
                  Visit Our Store
                </Button>
              </div>
            </Space>
          </Col>

          {/* Image section */}
          <Col xs={24} md={12} className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
              alt="About us"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </Col>
        </Row>
      </div>
      
    </div>
  );
};

export default About;
