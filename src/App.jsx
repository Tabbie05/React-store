import React from "react";
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import "./index.css";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";
import ProductPage from "./Components/ProductPage";


function App() {
  return (
   
      <Router>
        <div className="flex bg-gray-100 min-h-screen">
          <Sidebar />
          <Routes>
            <Route path="/" element={<MainContent />}/>
            <Route path="/Product/:id" element={<ProductPage />}/>
          </Routes>
        </div>

      </Router>
   
  );
}

export default App;
