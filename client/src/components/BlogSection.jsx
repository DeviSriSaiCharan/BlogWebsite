import BlogCard from "./BlogCard"

export default function BlogSection(){

    return (
        <>
            <h2 className="text-4xl text-left font-semibold mb-4">More Blogs</h2>
            <div>
                <BlogCard src={"asds"}/>
                <hr className="my-5 border-t border-zinc-800 h-0.5"/>
                <BlogCard src={"asdfs"}/>
                <hr className="my-5 border-t border-zinc-800 h-0.5"/>
                <BlogCard src={"ssdas"}/>
                <hr className="my-5 border-t border-zinc-800 h-0.5"/>
                <BlogCard src={""}/>
            </div>
        </>
    )
}