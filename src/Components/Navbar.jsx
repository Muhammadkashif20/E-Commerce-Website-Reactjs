import React from "react";
import { Menu, Dropdown, Input, Badge } from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const { Search } = Input;

const Navbar = ({setFilteredData}) => {
  const [searchValue, setSearchValue] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const fetchData=JSON.parse(localStorage.getItem("products"))
console.log("dataFetchNavbar=>", fetchData);
const category=fetchData.map((item)=>item.category)
const uniqueCategory=[...new Set(category)]
console.log("categories=>", category);
const handleCategory=(category)=>{
  console.log("Clicked category =>", category);
  const filtered=fetchData.filter((item)=>item.category===category)
  console.log("filteredData=>", filtered);
  setFilteredData(filtered)
    localStorage.setItem("filteredData", JSON.stringify(filtered))
}
const categories = (
  <Menu
  items={uniqueCategory.map((category, index) => ({
    key: index,
    label: (
      <span onClick={() => handleCategory(category)}>
        {category}
      </span>
    ),
  }))}
/>

  )
  const handleSeacrhFilter = (e) => {
    const value = e.target.value.toLowerCase();
    console.log("value=>", value);
  };

  return (
    <nav className="w-full bg-white px-6 py-4 flex justify-between items-center z-50 fixed bg-white/85 backdrop-blur-sm shadow-md"> 
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        MK<span className="text-black">-Shopping Store</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center">
        <Dropdown  overlay={categories} placement="bottom">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Categories
          </a>
        </Dropdown>
        <a href="/deals" className="text-gray-700 hover:text-blue-600 font-medium">
          Deals
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
          Contact
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
          About
        </a>
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
      <div className="flex items-center gap-4">
        <Badge count={2} size="small">
          <HeartOutlined className="text-xl cursor-pointer hover:text-red-500" />
        </Badge>
        <Badge count={3} size="small">
          <ShoppingCartOutlined className="text-xl cursor-pointer hover:text-green-600" />
        </Badge>
        <UserOutlined className="text-xl cursor-pointer hover:text-blue-600" />

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
              <a href="#" className="text-gray-700">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Deals
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                About
              </a>
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
