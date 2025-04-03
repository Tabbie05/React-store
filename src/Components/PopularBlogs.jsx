import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

function PopularBlogs() {
  const blogs = [
    {
      title: "Top 10 Luxury Watches to Elevate Your Style",
      author: "Sophia Carter",
      comments: 85,
      likes: 320,
    },
    {
      title: "Latest Fashion Trends: What’s Hot in 2024",
      author: "Ethan Wilson",
      comments: 120,
      likes: 450,
    },
    {
      title: "Best Grocery Deals You Shouldn’t Miss!",
      author: "Olivia Green",
      comments: 60,
      likes: 210,
    },
    {
      title: "Makeup Hacks Every Beauty Lover Should Know",
      author: "Emma Taylor",
      comments: 95,
      likes: 380,
    },
    {
      title: "Top 5 Sustainable Fashion Brands to Shop Now",
      author: "Lucas Martinez",
      comments: 75,
      likes: 290,
    },
    {
      title: "How to Style Your Outfits Like a Pro",
      author: "Ava White",
      comments: 140,
      likes: 510,
    },
    {
      title: "Grocery Shopping Tips to Save Money & Time",
      author: "Noah Brown",
      comments: 50,
      likes: 180,
    },
    {
      title: "Best Makeup Brands for Every Skin Type",
      author: "Liam Anderson",
      comments: 110,
      likes: 400,
    },
  ];

  return (
    <section className="p-4">
      <h2 className="font-bold text-[30px] mt-3 ml-4">Popular Blogs</h2>
      <ul>
        {blogs.map((blog, i) => (
          <div key={i} className="mt-4 border-b pb-2">
            <li className="font-bold text-lg">{blog.title}</li>
            <span className="text-gray-500">{blog.author}</span>
            <div className="flex items-center gap-4 mt-2">
              <span className="flex items-center">
                <AiOutlineLike size={20} />
                <span className="ml-2">{blog.likes}</span>
              </span>
              <span className="flex items-center">
                <FaRegComment size={20} />
                <span className="ml-2">{blog.comments}</span>
              </span>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
}

export default PopularBlogs;