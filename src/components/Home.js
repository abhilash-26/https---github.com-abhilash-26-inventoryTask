import React from "react";
import AddProduct from "./AddProduct";
import Navbar from "./Navbar";
import "../css/home.css";
import TopNav from "./TopNav";
import ProductPage from "./ProductPage";
import { Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div className="home_wrapper">
      <Navbar />
      <div className="content_container">
        <TopNav />
        <Routes>
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/view-product" element={<ProductPage />} />
        </Routes>
        {/* <AddProduct />
        <ProductPage /> */}
      </div>
    </div>
  );
}

export default Home;
