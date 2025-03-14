import React, { useEffect, useState } from "react";
import axios from "axios"; // Ensure axios is imported
import { useFilter } from "./FilterContext";

function Sidebar() {
  const [categories, setCategories] = useState([]);
  const keywords = ["apple", "watch", "fashion", "trend", "shoes", "shirt"];

  const {
    query,
    setQuery,
    category,
    setCategory,
    min,
    setMin,
    max,
    setMax,
    keyword,
    setKeyword,
  } = useFilter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        const uniqueCategories = [
          ...new Set(res.data.products.map((p) => p.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  // console.log(query);
  // console.log(keyword)
  // console.log(category)
  // console.log(min,max)

  return (
    <div className="h-screen border-2 w-[300px] p-4 bg-white">
      <h1 className="font-bold text-xl">React Store</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Product..."
        className="border-2 h-8 w-full px-2 mt-3"
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Price Filter Inputs */}
      <div className="flex gap-2 mt-3">
        <input
          type="number"
          className="border-2 w-1/2 px-2"
          placeholder="MIN"
          value={min}
          onChange={(e)=>setMin(e.target.value)}
        />
        <input
          type="number"
          className="border-2 w-1/2 px-2"
          placeholder="MAX"
          value={max}
          onChange={(e)=>setMax(e.target.value)}
        />
      </div>

      {/* Categories List */}

      <section>
        <h2 className="text-xl mt-3">Categories</h2>
        {categories.map((cat, index) => (
          <label key={index} className="block mt-1 text-[20px] ml-1">
            <input type="radio" name="category" className="mt-1"checked={category === cat} onChange={()=>setCategory(cat)}/> {cat}
          </label>
        ))}
      </section>
      <section>
        <h2 className="text-xl mt-3">Keywords</h2>
        <div>
          {keywords.map((words, index) => (
            <button
              key={index}
              className="block mt-1 w-full py-1 mb-2 border rounded hover:bg-gray-200 "
              onClick={() => setKeyword(words)}
            >
              {words}
            </button>
          ))}
        </div>
      </section>

      <button className="h-7 bg-black text-white w-full" onClick={()=>{setQuery("");setCategory("");setKeyword("");setMin(undefined);setMax(undefined)}}>Reset Filters</button>
    </div>
  );
}

export default Sidebar;
