import { PrismaClient } from "@prisma/client"
import { uploader } from "../utils/cloudinary.js";

const prisma = new PrismaClient();

export async function getAllBlogs(req, res){

    const userId = req.user;
    const page = req.query.page;
    console.log(page);
    let max = 10;

    try{
        const blogs = await prisma.blog.findMany({
            skip : Number(max*(page)),
            take : Number(max),
            select : {
                id : true,
                title : true,
                content : true,
                imageURL : true,
                createdAt : true,
                authorId : true,
                author : {
                    select : {
                        username : true,
                        id : true
                    }
                },
                Like : {
                    where : {
                        UserId : userId
                    },
                    select : {
                        id : true
                    }
                } 
            }
        })
        
        res.json({blogs, error : false})
    }
    catch(e){
        console.log(e);
        res.json({error : true, msg : "Something went wrong"});
    }

};

export async function postBlog(req, res){
    const {title, content, image} = req.body;
    const id = req.user;

    try{
        const result = await uploader.upload(image,{
            resource_type : "image",
            folder : "coverImages",
            transformation : [
                {quality : "auto:low"},
                {fetch_format : "auto"}
            ]
        })
        const imageURL = result.secure_url;

        const newBlog = await prisma.blog.create({
            data : {
                title,
                content,
                authorId : id,
                imageURL
            }
        })
        res.json({msg : "Blog posted", isCreated : true});
    }
    catch(e){
        console.log(e);
        res.json({msg : "Something went wrong", isCreated : false});
    }
};

export async function getBlog(req, res){
    const id = req.query.id;

    try{
        const blog = await prisma.blog.findUnique({
            where : {id}
        })

        res.json({blog});
    }
    catch(e){
        console.log(e);
        res.json({msg : "Something went wrong", blog : null})
    }
};

export async function deleteBlog(req, res){
    const id = req.query.id;

    try{
        const blog = await prisma.blog.delete({
            where : {id}
        });
        res.json(blog);
    }
    catch(e){
        console.log(e);
        res.json(e);
    }
};

export async function createLike(req, res){
    const userId = req.user;
    const blogId = req.body.blogId;

    try{
        const response = await prisma.like.create({
            data : {
                UserId : userId,
                BlogId : blogId
            }
        });
        console.log(response);
        if(response) res.json({msg : "Liked", success : true, response});
    }
    catch(e){
        console.log(e);
        res.json({msg : "Something wen wrong", success : false});
    }
}

export async function deleteLike(req, res){
    const userId = req.user;
    const blogId = req.query.blogId;

    try{
        const response = await prisma.like.delete({
            where : {
                UserId_BlogId : {
                    UserId : userId,
                    BlogId : blogId
                }
            }
        });
        console.log(response);
        if(response) res.json({msg : "Disliked", success : true, response});
    }
    catch(e){
        console.log(e);
        res.json({msg : "Something wen wrong", success : false});
    }
}