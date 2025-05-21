import React, { useState } from "react";
import { Button, Input, Typography, Divider, message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const BuyNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleOrder = () => {
    const { name, email, address, cardNumber, expiry, cvv } = formData;

    if (!name || !email || !address || !cardNumber || !expiry || !cvv) {
      message.error("Please fill in all fields.");
      return;
    }

    message.success("Order placed successfully!");
    setFormData({
      name: "",
      email: "",
      address: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-16 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
        <Title level={2} className="text-center text-gray-800 mb-4">
          Checkout
        </Title>

        {/* Custom Summary Message */}
        <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg p-4 mb-6 flex items-center gap-4">
          <ShoppingCartOutlined style={{ fontSize: "24px" }} />
          <div>
            <p className="font-semibold">Secure Checkout</p>
            <Text type="secondary" className="text-sm">
              Complete your payment to confirm the order.
            </Text>
          </div>
        </div>

        <Divider />

        {/* Billing Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-gray-700 text-sm">Full Name</label>
            <Input
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="John Doe"
              className="mt-1"
            />
          </div>
          <div>
            <label className="text-gray-700 text-sm">Email Address</label>
            <Input
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="example@mail.com"
              className="mt-1"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-gray-700 text-sm">Shipping Address</label>
            <Input.TextArea
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              placeholder="123 Main St, City, Country"
              rows={3}
              className="mt-1"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-gray-700 text-sm">Credit Card Number</label>
            <Input
              value={formData.cardNumber}
              onChange={(e) => handleChange("cardNumber", e.target.value)}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              className="mt-1"
            />
          </div>
          <div>
            <label className="text-gray-700 text-sm">Expiry Date</label>
            <Input
              value={formData.expiry}
              onChange={(e) => handleChange("expiry", e.target.value)}
              placeholder="MM/YY"
              maxLength={5}
              className="mt-1"
            />
          </div>
          <div>
            <label className="text-gray-700 text-sm">CVV</label>
            <Input
              value={formData.cvv}
              onChange={(e) => handleChange("cvv", e.target.value)}
              placeholder="123"
              maxLength={4}
              className="mt-1"
            />
          </div>
        </div>

        <Button
          type="primary"
          onClick={handleOrder}
          className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default BuyNow;
