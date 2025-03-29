import axios from "axios";
import React, { useEffect, useState } from "react";

function TopSeller() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://randomuser.me/api/?results=5");
        setAuthors(res.data.results);
        console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="font-bold text-[30px] mt-5">Top Sellers</div>
      {authors.map((author, i) => (
        <div key={i} className="flex mt-4" >
          <img
            src={author.picture.thumbnail}
            alt={author.name.first}
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
          <h4 className="mt-3 ml-3">{author.name.first} {author.name.last}</h4>
          <button>{}</button>
        </div>
      ))}
    </div>
  );
}

export default TopSeller;
