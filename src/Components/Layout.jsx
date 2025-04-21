import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const LayoutWithNavbar = ({ setFilteredData }) => {
  return (
    <>
      <Navbar setFilteredData={setFilteredData} />
      <Outlet />
    </>
  );
};

export default LayoutWithNavbar;