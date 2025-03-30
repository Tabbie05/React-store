import axios from "axios";
import React, { useEffect, useState } from "react";

function TopSeller() {
  const [authors, setAuthors] = useState([]);
  const [following, setFollowing] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://randomuser.me/api/?results=5");
        setAuthors(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleFollow = (index) => {
    setFollowing((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      <h2 className="font-bold text-[30px] mt-3 ml-4">Top Sellers</h2>
      <ul>
        {authors.map((author, i) => (
          <li key={i} className="flex items-center mt-4">
            <img
              src={author.picture.thumbnail}
              alt={author.name.first}
              className="w-[50px] h-[50px] rounded-full"
            />
            <h4 className="ml-3">{author.name.first} {author.name.last}</h4>
            <button 
              onClick={() => handleFollow(i)}
              className={`border ml-4 p-2 text-white rounded-lg ${
                following[i] ? "bg-red-500" : "bg-black"
              }`}
            >
              {following[i] ? "Unfollow" : "Follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopSeller;
