import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";
import ProductPage from "./Components/ProductPage";
import TopSeller from "./Components/TopSeller";
import PopularBlogs from "./Components/PopularBlogs";
import { FilterProvider } from "./Components/FilterContext";

function App() {
  return (
    <FilterProvider>
      <Router>
        <Routes>
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
          <Route path="/Product/:id" element={
            <div className="bg-white min-h-screen">
              <ProductPage />
            </div>
          }/>
        </Routes>
      </Router>
    </FilterProvider>
  );
}

export default App;