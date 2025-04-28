  import React from "react";
  import { Drawer } from "antd";
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
  const auth = getAuth();
  const Navbar = ({ setFilteredData }) => {
    const navigate = useNavigate();
    const [profileDrawerOpen, setProfileDrawerOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const fetchData = JSON.parse(localStorage.getItem("products"));
    console.log("dataFetchNavbar=>", fetchData);
    const category = fetchData.map((item) => item.category);
    const uniqueCategory = [...new Set(category)];
    console.log("categories=>", category);
    const handleCategory = (category) => {
      console.log("Clicked category =>", category);
      const filtered = fetchData.filter((item) => item.category === category);
      console.log("filteredData=>", filtered);
      setFilteredData(filtered);
      localStorage.setItem("filteredData", JSON.stringify(filtered));
    };
    const authData = JSON.parse(localStorage.getItem("formData"));
    const authDataReg = JSON.parse(localStorage.getItem("regFormData"));
    console.log("authData=>", authData);
    console.log("authDataReg=>", authDataReg);
    
    const categories = (
      <Menu
        items={uniqueCategory.map((category, index) => ({
          key: index,
          label: <span onClick={() => handleCategory(category)}>{category}</span>,
        }))}
      />
    );
    const handleSeacrhFilter = (e) => {
      const value = e.target.value.toLowerCase();
      console.log("value=>", value);
    };
    const handleUserLogout = () => {
      signOut(auth)
        .then(() => {
          message.success("Logged out successfully!");
          console.log("User signed out successfully.");
          localStorage.removeItem("formData");
          navigate("/login");
        })
        .catch((error) => {
          console.log("Error signing out: ", error);
        });
    };

    return (
      <nav className="w-full bg-white px-6 py-4 flex justify-between items-center z-50 fixed bg-white/85 backdrop-blur-sm shadow-md">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          MK<span className="text-black">-Shopping Store</span>
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
            placeholder="Search products..."
            enterButton
            value={searchValue}
            onChange={handleSeacrhFilter}
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <Badge count={3} size="small">
            <ShoppingCartOutlined className="text-xl cursor-pointer hover:text-green-600" />
          </Badge>
          <Drawer
            title="User Profile"
            placement="right"
            onClose={() => setProfileDrawerOpen(false)}
            open={profileDrawerOpen}
          >
            <div className="flex flex-col gap-4">
              <p>
                <strong>Name:</strong> {authDataReg?.fullname || "Not Provided"}
              </p>
              <p>
                <strong>Email:</strong> {authData?.username || "Not Provided"}
              </p>
              <button
                onClick={handleUserLogout}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            </div>
          </Drawer>
          <UserOutlined
            className="text-xl cursor-pointer hover:text-blue-600"
            onClick={() => setProfileDrawerOpen(true)}
          />
          
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
