import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const LayoutWithNavbar = ({filteredData, setFilteredData,count,setCount }) => {
  return (
    <>
      <Navbar filteredData={filteredData} setFilteredData={setFilteredData} count={count} setCount={setCount}/>
      <Outlet />
    </>
  );
};

export default LayoutWithNavbar;