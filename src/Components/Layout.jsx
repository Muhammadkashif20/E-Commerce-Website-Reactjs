import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const LayoutWithNavbar = ({filteredData, setFilteredData }) => {
  return (
    <>
      <Navbar filteredData={filteredData} setFilteredData={setFilteredData} />
      <Outlet />
    </>
  );
};

export default LayoutWithNavbar;