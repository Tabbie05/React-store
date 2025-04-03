import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";
import ProductPage from "./Components/ProductPage";
import TopSeller from "./Components/TopSeller";
import PopularBlogs from "./Components/PopularBlogs";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main page with sidebar and right column */}
        <Route path="/" element={
          <div className="flex bg-white min-h-screen">
            <Sidebar />
            <MainContent />
            <div className="flex flex-col w-[350px]">
              <TopSeller />
              <PopularBlogs />
            </div>
          </div>
        }/>
        
        {/* Product page - full width without side columns */}
        <Route path="/Product/:id" element={
          <div className="bg-white min-h-screen">
            <ProductPage />
          </div>
        }/>
      </Routes>
    </Router>
  );
}

export default App;