import React from "react";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import HeroSection from "./Components/HeroSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Deals from "./Components/Deals";
import DealDetail from "./Components/Detail";
const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route
          element={
            <>
              <HeroSection />
              <Products />
            </>
          }
          path="/"
        ></Route>
        <Route path="/deals" element={<Deals />}></Route>
        <Route path="/detail/:id" element={<DealDetail/>}></Route>

      </Routes>
    </BrowserRouter>
  );
};
export default App;