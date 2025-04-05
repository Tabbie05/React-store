import axios from "axios";
import React, { useEffect, useState } from "react";
import { LuTally3 } from "react-icons/lu";
import BookCard from "./BookCard";
import { useFilter } from "./FilterContext";

function MainContent() {
  const { query, category, min, max, keyword } = useFilter();

  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const url = keyword
      ? `https://dummyjson.com/products/search?q=${keyword}`
      : "https://dummyjson.com/products?limit=100";

    axios.get(url).then((res) => {
      setProducts(res.data.products || []);
    });
  }, [keyword]);

  const filteredProducts = products
    .filter((p) =>
      category ? p.category === category : true
    )
    .filter((p) =>
      min ? p.price >= +min : true
    )
    .filter((p) =>
      max ? p.price <= +max : true
    )
    .filter((p) =>
      query ? p.title.toLowerCase().includes(query.toLowerCase()) : true
    )
    .sort((a, b) => {
      if (filter === "cheap") return a.price - b.price;
      if (filter === "expensive") return b.price - a.price;
      if (filter === "popular") return b.rating - a.rating;
      return 0;
    });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const shownProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const changeFilter = (type) => {
    setFilter(type);
    setCurrentPage(1);
    setDropdownOpen(false);
  };

  return (
    <section className="p-5 bg-white max-w-[80rem] mx-auto">
      {/* Filter Button */}
      <div className="relative inline-block mb-4">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 px-4 py-2 border rounded-full shadow bg-white hover:bg-gray-100"
        >
          <LuTally3 />
          {filter === "all" ? "Filter" : filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>

        {dropdownOpen && (
          <div className="absolute z-10 bg-white border rounded shadow w-40 mt-2">
            {["cheap", "expensive", "popular"].map((f) => (
              <button
                key={f}
                onClick={() => changeFilter(f)}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shownProducts.map((p) => (
          <BookCard
            key={p.id}
            id={p.id}
            title={p.title}
            image={p.thumbnail}
            price={p.price}
            discountPercentage={p.discountPercentage}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded hover:bg-gray-200 disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded-full ${
              currentPage === i + 1 ? "bg-black text-white" : "hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded hover:bg-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default MainContent;
