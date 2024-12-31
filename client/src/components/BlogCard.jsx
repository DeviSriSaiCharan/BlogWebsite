import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BlogCard({ blog }) {
  
  const navigate = useNavigate();
  const [liked, setLike] = useState(blog.Like.length>0 ? true : false);

  async function handleLike(event){
    event.stopPropagation();
    const blogId = blog.id;
    console.log(blogId);
    let response;

    if(liked){
      console.log("Disliked");
      try{
        response = await axios.delete("http://localhost:3000/api/v1/blog/like", 
        {
          params : {blogId},
          headers : {
            "Content-Type" : "application/json",
          },
          withCredentials : true
        });
  
        console.log(response.data);

      }
      catch(e){
        console.log(e);
      }
  }
  else{
    console.log("Liked");
    try{
      response = await axios.post("http://localhost:3000/api/v1/blog/like", {blogId},
      {
        headers : {
          "Content-Type" : "application/json",
        },
        withCredentials : true
      })
      console.log(response.data);
    }
    catch(e){
      console.log(e);
    }
  }

  if(response){
    setLike(!liked);
  }
}

  function handleClick(){
    navigate(`/blog/${blog.id}`);
  }

  return (
    <div onClick={handleClick} className="flex flex-col md:flex-row justify-between bg-zinc-900 hover:bg-zinc-800 p-6 h-[13rem] gap-4 md:gap-10 rounded-xl transition-colors cursor-pointer">
      <div className={`w-full flex flex-col justify-between items-center` + (blog.imageURL ? "md:w-8/12" : "md:w-full")}>
        <div className="text-white text-left">
          <h3 className="text-xl md:text-2xl font-medium line-clamp-3 mb-2">
            {blog.title || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, debitis."}
          </h3>
          <p className="text-sm md:text-base text-zinc-400 line-clamp-3 md:line-clamp-4">
            {blog.content || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at natus ea debitis sapiente amet iure impedit. Quod nesciunt consequuntur natus quo voluptatum dolor laborum minus molestiae. Deserunt, quidem minus."}
          </p>
        </div>
        <div className="flex gap-3 items-center mt-4">
          <div className="w-5 h-5 rounded-full bg-blue-400 flex-shrink-0"></div>
          <p className="text-sm md:text-base truncate">
            {blog.author.username || "Devi Sri Sai Charan"} | {blog.createdAt.slice(0,10) + " | " + blog.createdAt.slice(12,19) || "24 Jan 2024"}
          </p>

          <button onClick={handleLike} className={`${liked ? "bg-green-500" : "border-2"} px-4 rounded-xl `}>Like</button>
        </div>
      </div>
      
      {blog.imageURL && (
        <div className="order-first md:order-last w-full md:w-4/12 h-48 md:h-auto">
          <img 
            src={blog.imageURL}
            alt="Blog post image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      )}
    </div>
  );
}
