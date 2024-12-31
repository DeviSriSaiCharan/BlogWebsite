import { useState, useEffect } from "react";
import BlogCard from "./BlogCard"
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function BlogSection(){
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(0);
    const navigate = useNavigate();

    async function getBlogs(){
        try{
            const response = await axios.get(`http://localhost:3000/api/v1/blog/?page=${page}`,{
                headers : {
                    "Content-Type" : "application/json",
                },
                withCredentials : true,
            }
            );

            console.log(response);
            if('isValid' in response.data && !response.data.isValid) navigate('/signIn');

            if(!response.data.error) setBlogs(response.data.blogs);
            console.log("Blogs " + blogs);
        }
        catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        getBlogs();
        console.log("Called")
    },[])

    return (
        <>
            <h2 className="text-4xl text-left font-semibold mb-4">More Blogs</h2>
            <div>
                {   
                    blogs &&
                    blogs.map((blog, i)=>{
                        return (
                            <>
                                <BlogCard key={i} blog={blog} />
                                <hr className="my-5 border-t border-zinc-800 h-0.5"/>
                            </>
                        )
                    })
                }
                {/* <BlogCard src={"asds"}/>
                <hr className="my-5 border-t border-zinc-800 h-0.5"/>
                <BlogCard src={"asdfs"}/>
                <hr className="my-5 border-t border-zinc-800 h-0.5"/>
                <BlogCard src={"ssdas"}/>
                <hr className="my-5 border-t border-zinc-800 h-0.5"/>
                <BlogCard src={""}/> */}
            </div>
        </>
    )
}