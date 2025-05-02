import React from "react";
import { Button, Input, Typography, Divider } from "antd";

const { Title } = Typography;

const BuyNow = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-16 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        {/* Title */}
        <Title level={2} className="text-center text-gray-900 mb-8">
          Buy Now
        </Title>

        {/* Product Details */}
        <div className="flex items-center gap-6 mb-8">
          <img
            src="https://via.placeholder.com/150"
            alt="Product"
            className="w-32 h-32 object-cover rounded-lg"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-800">Product Name</h3>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
            <div className="text-lg font-semibold text-green-600 mt-4">$99.99</div>
          </div>
        </div>

        <Divider />

        {/* Billing Details Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <Input placeholder="Enter your full name" className="mt-2" />
          </div>
          <div>
            <label className="block text-gray-700">Email Address</label>
            <Input placeholder="Enter your email address" className="mt-2" />
          </div>
          <div>
            <label className="block text-gray-700">Shipping Address</label>
            <Input.TextArea
              placeholder="Enter your shipping address"
              className="mt-2"
              rows={4}
            />
          </div>
          <div>
            <label className="block text-gray-700">Credit Card Number</label>
            <Input placeholder="Enter your credit card number" className="mt-2" />
          </div>
          <div>
            <label className="block text-gray-700">Expiry Date</label>
            <Input placeholder="MM/YY" className="mt-2" />
          </div>
          <div>
            <label className="block text-gray-700">CVV</label>
            <Input placeholder="Enter CVV" className="mt-2" />
          </div>
        </div>

        <Divider />

        {/* Submit Button */}
        <Button
          type="primary"
          className="w-full py-3 mt-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default BuyNow;
