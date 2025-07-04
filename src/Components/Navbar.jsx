import React, { useContext } from "react";
import { Button, Drawer } from "antd";
import { Menu, Dropdown, Input, Badge, message } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const { Search } = Input;
import { getAuth, signOut } from "firebase/auth";
import { cartContext } from "../context/cartContext";
const auth = getAuth();
const Navbar = ({ setFilteredData }) => {
  const authData = JSON.parse(localStorage.getItem("formData"));
  const authDataGoogle = JSON.parse(localStorage.getItem("googleFormData"));
  console.log("authDataGoogle=>", authDataGoogle);
  const { cartItem } = useContext(cartContext);
  const navigate = useNavigate();
  const [profileDrawerOpen, setProfileDrawerOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const fetchData = JSON.parse(localStorage.getItem("products"));

  console.log("dataFetchNavbar=>", fetchData);
  const category = fetchData?.map((item) => item.category);

  const uniqueCategory = [...new Set(category)];
  console.log("categories=>", category);

  const handleCategory = (category) => {
    console.log("Clicked category =>", category);
    const filtered = fetchData.filter((item) => item.category === category);
    console.log("filteredData=>", filtered);
    setFilteredData(filtered);
    localStorage.setItem("filteredData", JSON.stringify(filtered));
  };

  const categories = (
    <Menu
      items={uniqueCategory.map((category, index) => ({
        key: index,
        label: <span onClick={() => handleCategory(category)}>{category}</span>,
      }))}
    />
  );
  console.log("fetchData=>", fetchData);
  const handleSeacrhFilter = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);
    console.log("value=>", value);
    const filteredInput = fetchData.filter((item) => {
      return (
        item.title.toLowerCase().includes(value) ||
        item.category.toLowerCase().includes(value)
      );
    });
    console.log("userSearch=>", filteredInput);
    setFilteredData(filteredInput);
  };
  const handleCartItem = () => {
    message.error("Please login to add items to cart");
  };
  const handleUserLogout = () => {
    signOut(auth)
      .then(() => {
        message.success("Logged out successfully!");
        console.log("User signed out successfully.");
        localStorage.removeItem("formData");
        localStorage.removeItem("regFormData");
        localStorage.removeItem("googleFormData");
        navigate("/");
      })
      .catch((error) => {
        console.log("Error signing out: ", error);
      });
  };
  const handleUserAuth = () => {
    setProfileDrawerOpen(true);
    navigate("/login");
  };
  console.log("googleImage=>", authDataGoogle?.photoURL);
  return (
    <nav className="w-full bg-white px-6 py-4 flex justify-between items-center z-50 fixed bg-white/85 backdrop-blur-sm shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        MK<span className="text-black">-Shopping Store </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
          Home
        </Link>
        <Dropdown
          overlay={categories}
          placement="bottom"
          className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
        >
          Categories
        </Dropdown>
        <Link
          to="/deals"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Deals
        </Link>
        <Link
          to="/contact"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Contact
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          About
        </Link>
      </div>

      {/* Search */}
      <div className="hidden md:block w-64">
        <Search
          type="text"
          placeholder="Search products..."
          enterButton
          value={searchValue}
          onChange={handleSeacrhFilter}
        />
      </div>

      {/* Cart Items */}
      <div className="flex items-center gap-6">
        <Link to={"/AddCart"}>
          <Badge
            count={`${authData || authDataGoogle ? cartItem.length : 0}`}
            size="default"
          >
            <ShoppingCartOutlined className="text-2xl cursor-pointer hover:text-blue-600" />
          </Badge>
        </Link>

        {authData || authDataGoogle ? (
          <div>
            <div className="flex items-center gap-3">
              {authDataGoogle?.photoURL ? (
                <img
                  src={authDataGoogle?.photoURL}
                  alt="Profile"
                  className="w-9 h-9 rounded-full cursor-pointer"
                  onClick={() => setProfileDrawerOpen(true)}
                />
              ) : (
                <UserOutlined
                  className="text-xl cursor-pointer hover:text-blue-600"
                  onClick={() => setProfileDrawerOpen(true)}
                />
              )}

              <span className="text-sm font-medium text-gray-700">
                {authData?.fullname}
              </span>

              <Button
                type="primary"
                onClick={handleUserLogout}
                className="bg-blue-600 "
              >
                Logout
              </Button>
            </div>
            <Drawer
              title="User Profile"
              placement="right"
              onClose={() => setProfileDrawerOpen(false)}
              open={profileDrawerOpen}
            >
              <div className="flex flex-col items-center gap-4">
                {authData?.photoURL || authDataGoogle?.photoURL ? (
                  <img
                    src={authData?.photoURL || authDataGoogle?.photoURL}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xl text-black">
                    <UserOutlined
                      className="text-xl cursor-pointer hover:text-blue-600"
                    />
                  </div>
                )}

                <div className="text-center space-y-1 text-base text-gray-800">
                  <p>
                    <strong>Name:</strong>{" "}
                    {authData?.fullname || authDataGoogle?.displayName}
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    {authData?.email || authDataGoogle?.email}
                  </p>
                </div>

                <button
                  onClick={handleUserLogout}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Logout
                </button>
              </div>
            </Drawer>
          </div>
        ) : (
          <UserOutlined
            className="text-xl cursor-pointer hover:text-blue-600"
            onClick={handleUserAuth}
          />
        )}
        {/* Hamburger for mobile */}
        <MenuOutlined
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-xl cursor-pointer md:hidden"
        />
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t md:hidden z-50">
          <ul className="flex flex-col p-4 space-y-3">
            <li>
              <Link to="#" className="text-gray-700">
                Categories
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-700">
                Deals
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-700">
                Contact
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-700">
                About
              </Link>
            </li>
            <Search
              placeholder="Search products..."
              enterButton
              className="mt-2"
            />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
