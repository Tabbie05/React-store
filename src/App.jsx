import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Sidebar from "./Components/Sidebar";


function App() {
  return (
   
      <Router>
        <div className="flex bg-gray-100 min-h-screen">
          <Sidebar />
        </div>
      </Router>
   
  );
}

export default App;
