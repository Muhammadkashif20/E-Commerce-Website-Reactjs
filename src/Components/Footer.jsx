import React from 'react';
import { Layout, Row, Col, Button, Input, Typography, Space } from 'antd';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const { Title, Paragraph } = Typography;

const Footer = () => {
  return (
    <Layout.Footer className="bg-gray-100 text-black py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <Row gutter={[16, 16]} justify="space-between">
          {/* Quick Links */}
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="text-black">Quick Links</Title>
            <Space direction="vertical" className="text-gray-700">
              <a href="/" className="hover:text-blue-600">Home</a>
              <a href="/" className="hover:text-blue-600">Products</a>
              <a href="/about" className="hover:text-blue-600">About Us</a>
              <a href="/contact" className="hover:text-blue-600">Contact</a>
            </Space>
          </Col>

          {/* Social Media Links */}
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="text-black">Follow Us</Title>
            <Space size="large">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
                <FaFacebook size={30} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
                <FaTwitter size={30} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
                <FaInstagram size={30} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
                <FaLinkedin size={30} />
              </a>
            </Space>
          </Col>

          {/* Newsletter Subscription */}
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="text-black">Subscribe to Our Newsletter</Title>
            <Paragraph className="text-gray-700 mb-4">Stay updated with the latest deals and offers!</Paragraph>
            <Input
              placeholder="Enter your email"
              className="w-full mb-4 p-2 rounded-md"
            />
            <Button type="primary" className="w-full rounded-md bg-blue-600 hover:bg-blue-700">
              Subscribe
            </Button>
          </Col>

          {/* Contact Information */}
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="text-black">Contact Us</Title>
            <Paragraph className="text-gray-700">Email: support@mktstore.com</Paragraph>
            <Paragraph className="text-gray-700">Phone: +123 456 7890</Paragraph>
          </Col>
        </Row>

        {/* Copyright */}
        <div className="text-center text-gray-700 mt-8 font-medium">
          <p>&copy; 2025 MK Shopping Store. All Rights Reserved.</p>
        </div>
      </div>
    </Layout.Footer>
  );
};

export default Footer;
