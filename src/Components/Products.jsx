import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Typography, Row, Col, Spin } from "antd";
import { data, useNavigate } from "react-router-dom";
import { Tag, Rate } from "antd";
import { cartContext } from "../context/cartContext";
const { Title, Paragraph } = Typography;
const Products = ({ filteredData, setFilteredData }) => {

  const { cartItem, addToCart, isItemAdded } = useContext(cartContext);
  console.log("cartItem=>", cartItem);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://dummyjson.com/products");
        console.log("Products fetched successfully", res.data.products);
        setProducts(res.data.products);
        let data = localStorage.setItem(
          "products",
          JSON.stringify(res.data.products)
        );
        console.log("data=>", data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products", err);
        setLoading(false);
      }
    };

    localStorage.removeItem("filteredData");
    setFilteredData(null);

    fetchProducts();
  }, []);
  const filterData = JSON.parse(localStorage.getItem("filteredData"));
  console.log("filterData=>", filterData);
  const displayData = filterData
    ? filterData
    : filteredData
    ? filteredData
    : products;
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <Title level={2} className="text-center mb-8">
        Our Featured Products
      </Title>
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
          {displayData?.map((product) => (
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
                className="w-full max-w-xs flex flex-col justify-between shadow-md rounded-xl border border-gray-200"
                cover={
                  <img
                    alt={product.title}
                    src={product.images[0]}
                    className="h-56 object-cover rounded-t-xl"
                  />
                }
              >
                <div>
                  <Title level={5} ellipsis className="mb-1">
                    {product.title}
                  </Title>
                  <Paragraph ellipsis={{ rows: 2 }} className="text-sm">
                    {product.description}
                  </Paragraph>

                  <div className="flex items-center justify-between mt-2">
                    <Tag color="blue" className="capitalize">
                      {product.category}
                    </Tag>
                    <Rate disabled defaultValue={Math.round(product.rating)} />
                  </div>
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
                      className={`w-1/2 ${isItemAdded(product.id) ? "bg-blue-700 text-white" : "bg-blue-500 text-white"}`}
                      onClick={() => addToCart(product)}>
                      {isItemAdded(product.id)
                        ? "Item is Added"
                        : "Add to Cart"}
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
