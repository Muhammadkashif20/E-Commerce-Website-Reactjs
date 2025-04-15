import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Typography, Row, Col, Spin } from "antd";
import Swal from "sweetalert2"; // Import SweetAlert2

const { Title, Paragraph } = Typography;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search , setSearch] = useState("");
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

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <Title level={2} className="text-center mb-8">Our Featured Products</Title>

      {loading ? (
        <div className="flex justify-center items-center h-80">
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[24, 24]} justify="center">
          {products.map((product) => (
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
                className="w-full max-w-xs"
                cover={
                  <img
                    alt={product.title}
                    src={product.images[0]}
                    className="h-56 object-cover"
                  />
                }
              >
                <Title level={5} ellipsis>{product.title}</Title>
                <Paragraph ellipsis={{ rows: 2 }}>{product.description}</Paragraph>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-lg font-semibold text-green-600">
                    ${product.price}
                  </span>
                  <Button 
                    type="primary" 
                    onClick={handleAddToCart} 
                  >
                    Add to Cart
                  </Button>
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
