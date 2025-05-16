import React from "react";
import { Button, Typography, Row, Col } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <div className="bg-white py-28 text-gray-800">
      <div className="container mx-auto px-6">
        <Row justify="center">
          <Col xs={24} md={20} lg={16}>
            <div className="text-center animate-fadeInUp">
              <Title level={1} className="!text-4xl md:!text-5xl !font-bold !leading-tight mb-4">
                Your One-Stop Shop for <br />
                <span className="text-blue-600">Quality & Affordability</span>
              </Title>
              <Paragraph className="text-lg md:text-xl text-gray-600 mb-8">
                Discover premium products, unbeatable prices, and exclusive deals — all in one place. It's time to shop smarter.
              </Paragraph>
              <Link to="/deals">
                <Button
                  type="primary"
                  size="large"
                  className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-2 rounded-lg text-white shadow-lg hover:shadow-xl"
                >
                  Browse Exclusive Deals
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeroSection;
