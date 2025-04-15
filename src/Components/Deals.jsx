import React from "react";
import { Card, Typography, Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";
const { Title, Paragraph } = Typography;

const Deals = () => {
  const navigate = useNavigate();
  const deals = JSON.parse(localStorage.getItem("products"))

  return (
    <div className="bg-gray-50 min-h-screen py-28 px-4">
      <div className="max-w-7xl mx-auto text-center mb-6">
        <Title level={2} className="text-gray-800 text-3xl md:text-4xl">
          🔥 Today's Exclusive Deals
        </Title>
        <Paragraph className="text-gray-600 text-base md:text-lg">
          Handpicked deals just for you — limited-time offers on your favorite products.
        </Paragraph>

        {/* Back to Home Button */}
        <Button
          onClick={() => navigate("/")}
          className="mt-4 border-gray-300 text-gray-700"
        >
           Back to Home
        </Button>
      </div>

      <Row gutter={[24, 24]} justify="center">
        {deals.slice(0, 5).map((deal, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              className="rounded-xl shadow-sm transition-all duration-300 hover:shadow-md"
              cover={
                <img
                  alt={deal.title}
                  src={deal.images}
                  className="h-56 w-full object-cover rounded-t-xl"
                />
              }
            >
              <Title level={4} className="text-gray-800 mb-1">
                {deal.title}
              </Title>
              <Paragraph className="text-gray-600 text-sm mb-4">
                {deal.description}
              </Paragraph>
              <Button
                type="primary"
                onClick={() => navigate(`/detail/${deal.id}`)}
                className="bg-blue-600 hover:bg-blue-700 w-full rounded-md"
              >
                View Deal
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Deals;
