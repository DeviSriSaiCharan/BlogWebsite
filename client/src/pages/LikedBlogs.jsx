import React from "react";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LikedBlogs() {
  const [data, setData] = useState([]);

  async function getLikedblogs() {
    const response = await axios.get(
      "http://localhost:3000/api/v1/blog/likedblogs",
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    if ("isValid" in response.data && !response.data.isValid)
      navigate("/signIn");
    setData(response.data.blogs);
  }

  useEffect(() => {
    getLikedblogs();
  }, []);

  return (
    <div className="bg-black min-h-screen py-4">
      <Navbar />
      <main className="text-white mx-auto w-10/12 pt-28">
        <h1 className="text-4xl font-bold text-left mb-6">Liked Blogs</h1>
        <div className="flex flex-col gap-4">
          {
            data.map((blog, index) => {
              return <Card key={index} blog={blog} />;
            })
            // JSON.stringify(data)
          }
        </div>
      </main>
    </div>
  );
}

function Card({ blog }) {
  const navigate = useNavigate();
  
  return (
    <div
      onClick={() => navigate(`/blog/${blog.blog.id}`)}
      className="flex flex-col md:flex-row justify-between bg-zinc-900 hover:bg-zinc-800 p-6 h-[13rem] gap-4 md:gap-10 rounded-xl transition-colors cursor-pointer"
    >
      <div
        className={
          `w-full flex flex-col justify-between items-center` +
          (blog.blog.imageURL ? "md:w-8/12" : "md:w-full")
        }
      >
        <div className="text-white text-left">
          <h3 className="text-xl md:text-2xl font-medium line-clamp-3 mb-2">
            {blog.blog.title ||
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, debitis."}
          </h3>
          <p className="text-sm md:text-base text-zinc-400 line-clamp-3 md:line-clamp-4">
            {blog.blog.content ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at natus ea debitis sapiente amet iure impedit. Quod nesciunt consequuntur natus quo voluptatum dolor laborum minus molestiae. Deserunt, quidem minus."}
          </p>
        </div>
        <div className="flex gap-3 items-center mt-4">
          <div className="w-5 h-5 rounded-full bg-blue-400 flex-shrink-0"></div>
          <p className="text-sm md:text-base truncate">
            {blog.blog.author.username || "Devi Sri Sai Charan"} |{" "}
            {blog.blog.createdAt.slice(0, 10) +
              " | " +
              blog.blog.createdAt.slice(12, 19) || "24 Jan 2024"}
          </p>

          {/* <button onClick={handleLike} className={`${liked ? "bg-green-500" : "border-2"} px-4 rounded-xl `}>Like</button> */}
        </div>
      </div>

      {blog.blog.imageURL && (
        <div className="order-first md:order-last w-full md:w-4/12 h-48 md:h-auto">
          <img
            src={blog.blog.imageURL}
            alt="Blog post image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      )}
    </div>
  );
}
