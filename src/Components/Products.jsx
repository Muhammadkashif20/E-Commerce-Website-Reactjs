import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Typography, Row, Col, Spin } from "antd";
import Swal from "sweetalert2"; 
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

const Products = ({ filteredData,setFilteredData }) => {
  const navigate= useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://dummyjson.com/products");
        console.log("Products fetched successfully", res.data.products);
        setProducts(res.data.products);
        let data= localStorage.setItem("products",JSON.stringify(res.data.products))
        console.log("data=>",data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products", err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = () => {
    Swal.fire({
      icon: "success",
      title: "Item added to cart!",
      text: "Your product has been added to the cart successfully.",
    });
  };
  const filterData=JSON.parse(localStorage.getItem("filteredData"))
  console.log("filterData=>", filterData);
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <Title level={2} className="text-center mb-8">Our Featured Products</Title>
      {filterData && (
  <div className="text-center mb-6">
    <Button 
      onClick={() => {
        localStorage.removeItem("filteredData");
        setFilteredData(null); 
      }}
    >
      Show All Products
    </Button>
  </div>
)}

      {loading ? (
        <div className="flex justify-center items-center h-80">
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[24, 24]} justify="center">
          {(filterData  ?   filterData : products).map((product) => (
            <Col
              key={product.id}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              className="flex justify-center"
            >
             <Card
  hoverable
  className="w-full max-w-xs flex flex-col justify-between"
  cover={
    <img
      alt={product.title}
      src={product.images[0]}
      className="h-56 object-cover"
    />
  }
>
  <div>
    <Title level={5} ellipsis>{product.title}</Title>
    <Paragraph ellipsis={{ rows: 2 }}>{product.description}</Paragraph>
  </div>

  <div className="mt-4">
    <div className="flex justify-between items-center mb-2">
      <span className="text-lg font-semibold text-green-600">
        ${product.price}
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
        onClick={() => navigate(`/detail/${product.id}`)}
      >
        View Details
      </Button>
    </div>
  </div>
</Card>

            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Products;
