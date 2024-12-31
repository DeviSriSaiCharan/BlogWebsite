import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "@/components/Navbar";

export default function Blog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});

  async function getABlog() {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/blog/get/?id=${id}`,{
          headers : {
            "Content-Type" : "application/json",
          },
          withCredentials : true,
        }
      );
      console.log(response);
      if ("isValid" in response.data && !response.data.isValid)
        navigate("/signIn");

      if (response.data.blog) setBlog(response.data.blog);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getABlog();
  }, []);

  return (
    <div className="bg-black min-h-screen py-4">
      <Navbar />
      <main className="text-white mx-auto w-10/12 pt-28 px-28 min-h-screen">
        <div className="flex flex-col text-left">
          {
            blog.imageURL &&
            <div className="w-full h-96 mb-10">
              <img src={blog.imageURL} className="object-cover w-full rounded-3xl h-full" />
            </div>
          }
          <div
            className="text-white px-4 py-2 mb-10 "
          >
            <h1 className=" text-4xl font-medium mb-2">{blog.title}</h1>
            <div className="flex gap-4 items-center text-zinc-400 text-sm">
              <div className="w-5 h-5 rounded-full bg-blue-500"></div>
              <p>Devi Sri Sai Charan</p>
              <p>12 Jan 2024</p>
            </div>
          </div>
          
          <div
            className="text-white text-xl px-4 py-2 "
          >
            {blog.content}
          </div>
          
          <div className="flex justify-between">
            
          </div>
        </div>
      </main>
    </div>
  );
}
