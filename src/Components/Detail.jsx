import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Button } from "antd";
const { Title, Paragraph } = Typography;

const DealDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const deals = JSON.parse(localStorage.getItem("products")) || [];
  const deal = deals.find((item) => String(item.id) === String(id));

  if (!deal) return <div className="text-center py-20">Deal not found.</div>;

  return (
    <div className="min-h-screen bg-white px-4 pt-10">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img src={deal.images} alt={deal.title} className="rounded-xl w-full object-cover" />

          <div>
            <Title level={3} className="text-gray-800 mb-2">{deal.title}</Title>
            <Paragraph className="text-gray-600 mb-4">{deal.description}</Paragraph>
            <Paragraph className="text-lg font-semibold text-blue-600 mb-6">Price: {deal.price}</Paragraph>

            <div className="flex gap-4">
              <Button type="primary" className="bg-blue-600 hover:bg-blue-700 px-6 rounded-md">
                Buy Now
              </Button>
              <Button onClick={() => navigate("/deals")} className="border-gray-300 text-gray-700">
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealDetail;
