import { createContext, useState, useContext } from "react";

// Create Context
export const FilterContext = createContext();

// Provider Component
export const FilterProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [keyword, setKeyword] = useState("");

  return (
    <FilterContext.Provider
      value={{
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
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// Custom Hook to use FilterContext
export const useFilter = () => {
  const context = useContext(FilterContext);
  
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  return context;
};
