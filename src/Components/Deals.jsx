import React from "react";
import { Card, Typography, Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const { Title, Paragraph } = Typography;

const Deals = () => {
  const navigate = useNavigate();
  const deals = JSON.parse(localStorage.getItem("products"))
 const handleAddToCart = () => {
    Swal.fire({
      icon: "success",
      title: "Item added to cart!",
      text: "Your product has been added to the cart successfully.",
    });
  };
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
           className="rounded-xl shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between h-full"
           cover={
             <img
               alt={deal.title}
               src={deal.images[0]} 
               className="h-56 w-full object-cover rounded-t-xl"
             />
           }
         >
           <div>
             <Title level={4} className="text-gray-800 mb-1" ellipsis>
               {deal.title}
             </Title>
             <Paragraph className="text-gray-600 text-sm" ellipsis={{ rows: 2 }}>
               {deal.description}
             </Paragraph>
           </div>
       
           <div className="mt-4">
  <div className="flex justify-between items-center mb-3">
    <span className="text-lg font-semibold text-green-600">
      ${deal.price}
    </span>
  </div>
 <div className="flex justify-between gap-2">
      <Button 
        type="primary" 
        className="w-1/2" 
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
      <Button 
        className="w-1/2" 
        onClick={() => navigate(`/detail/${deal.id}`)}
      >
        View Details
      </Button>
    </div>
</div>

         </Card>
       </Col>
       
        
        ))}
      </Row>
    </div>
  );
};

export default Deals;
