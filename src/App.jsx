import React, { useState } from "react";
import Products from "./Components/Products";
import HeroSection from "./Components/HeroSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Deals from "./Components/Deals";
import Footer from "./Components/Footer";
import DealDetail from "./Components/Detail";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Login from "./auth/Login";
import LayoutWithNavbar from "./Components/Layout";
import Signup from "./auth/Signup";
import BuyNow from "./Components/BuyNow";
const App = () => {
  const [filteredData, setFilteredData] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signUp" element={<Signup />}></Route>
      <Route element={<LayoutWithNavbar setFilteredData={setFilteredData} />}>
        <Route
          element={
            <>
              <HeroSection />
              <Products
                filteredData={filteredData}
                setFilteredData={setFilteredData}
              />
              <Footer/>
            </>
          }
          path="/" />
        <Route path="/deals" element={<Deals />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/buynow" element={<BuyNow />}/>
        <Route path="/detail/:id" element={<DealDetail />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
