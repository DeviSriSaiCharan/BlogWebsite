import React from 'react';

export default function BlogCard({ src, title, description, author, date }) {
  return (
    <div className="flex flex-col md:flex-row justify-between hover:bg-zinc-800 p-4 min-h-[13rem] gap-4 md:gap-10 rounded-xl transition-colors">
      <div className={`w-full flex flex-col justify-between` + (src ? "md:w-8/12" : "md:w-full")}>
        <div className="text-white text-left">
          <h3 className="text-xl md:text-2xl font-medium line-clamp-3 mb-2">
            {title || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, debitis."}
          </h3>
          <p className="text-sm md:text-base text-zinc-400 line-clamp-3 md:line-clamp-4">
            {description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at natus ea debitis sapiente amet iure impedit. Quod nesciunt consequuntur natus quo voluptatum dolor laborum minus molestiae. Deserunt, quidem minus."}
          </p>
        </div>
        <div className="flex gap-3 items-center mt-4">
          <div className="w-5 h-5 rounded-full bg-blue-400 flex-shrink-0"></div>
          <p className="text-sm md:text-base truncate">
            {author || "Devi Sri Sai Charan"} | {date || "24 Jan 2024"}
          </p>
        </div>
      </div>
      
      {src && (
        <div className="order-first md:order-last w-full md:w-4/12 h-48 md:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Blog post image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      )}
    </div>
  );
}