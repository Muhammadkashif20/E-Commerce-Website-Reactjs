import React from "react";
import { Button, Typography, Row, Col } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <div className="relative bg-gray-100 py-28 text-gray-800">
      {/* Optionally, you can add a subtle pattern or light gradient here */}
      <div className="container mx-auto px-4 text-center">
        <Title level={1} className="text-4xl md:text-5xl font-semibold mb-4">
          Discover Top Products & Exclusive Offers
        </Title>
        <Paragraph className="text-lg md:text-xl mb-6 text-gray-600">
          Unlock amazing deals and shop for the best products. Explore now and enjoy exclusive discounts!
        </Paragraph>
        <Row justify="center">
          <Col>
            <Link to="/deals">
              <Button
                type="default"
                size="large"
                className="border border-gray-300 text-gray-800 hover:border-gray-400 transition duration-300 ease-in-out py-3 px-8 rounded-lg shadow-md"
              >
                Exclusive Deals
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeroSection;
