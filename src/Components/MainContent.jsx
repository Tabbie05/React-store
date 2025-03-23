import axios from "axios";
import React, { useEffect, useState } from "react";
import { LuTally3 } from "react-icons/lu";
import { useFilter } from "./FilterContext";

function MainContent() {
  const {
    query,
    category,
    min,
    max,
    keyword,
  } = useFilter();

  const [products, setproducts] = useState([]);
  const [filter, setfilter] = useState("all");
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const itemPerPage = 12;

  useEffect(() => {
    let url = `https://dummyjson.com/products?limit=${itemPerPage}&skip=${
      (currentPage - 1) * itemPerPage
    }`;
    if (keyword) {
      url = `https://dummyjson.com/products/search?q=${keyword}`;
    }

    axios.get(url)
      .then(res => {
        setproducts(res.data.products || []);
      })
      .catch(e => {
        console.log(e);
      });
  }, [currentPage, keyword]);

  const getFilteredProducts = () => {
    let filtered = [...products];

    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    if (min !== undefined && min !== "") {
      filtered = filtered.filter(product => product.price >= Number(min));
    }

    if (max !== undefined && max !== "") {
      filtered = filtered.filter(product => product.price <= Number(max));
    }

    if (query) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    switch (filter) {
      case "expensive":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "cheap":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "popular":
        return [...filtered].sort((a, b) => b.rating - a.rating);
      default:
        return filtered;
    }
  };
  console.log(filter)

  const filteredProducts = getFilteredProducts();

  return (
    <section className="xl:w-[55rem] lg:w-[55rem] sm:w-[40rem] xs:w-[20rem] p-5 bg-pink-200">
      <div className="relative inline-block">
        {/* Filter Button */}
        <button
          onClick={() => setdropdownOpen(!dropdownOpen)}
          className="px-4 py-2 rounded-full flex items-center gap-2 bg-white border border-gray-300 shadow-md hover:bg-gray-100 transition-all"
        >
          <LuTally3 size={25} />
          {filter === "all"
            ? "Filter"
            : filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute left-0 mt-2 w-44 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={() => setfilter("cheap")}
              className="block px-4 py-2 w-full text-left hover:bg-gray-200"
            >
              Cheap
            </button>
            <button 
              onClick={() => setfilter("expensive")}
              className="block px-4 py-2 w-full text-left hover:bg-gray-200"
            >
              Expensive
            </button>
            <button
              onClick={() => setfilter("popular")}
              className="block px-4 py-2 w-full text-left hover:bg-gray-200"
            >
              Popular
            </button>
          </div>
        )}
      </div>

      
    </section>
  );
}

export default MainContent;
