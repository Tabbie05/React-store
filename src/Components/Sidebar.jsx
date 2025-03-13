import React, { useEffect, useState } from "react";
import axios from "axios"; // Ensure axios is imported

function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products/categories");
        console.log("Fetched Categories:", res.data); // ✅ Log API response
        setCategories(res.data); // Ensure categories are set correctly
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="h-screen border-2 w-[300px] p-4 bg-white">
      <h1 className="font-bold text-xl">React Store</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Product..."
        className="border-2 h-8 w-full px-2 mt-3"
      />

      {/* Price Filter Inputs */}
      <div className="flex gap-2 mt-3">
        <input type="number" className="border-2 w-1/2 px-2" placeholder="MIN" />
        <input type="number" className="border-2 w-1/2 px-2" placeholder="MAX" />
      </div>

      {/* Categories List */}
      <h2 className="text-xl mt-4">Categories</h2>
      
    </div>
  );
}

export default Sidebar;
