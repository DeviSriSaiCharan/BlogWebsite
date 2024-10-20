import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function getAllBlogs(req, res){

    const page = req.query.page;
    let max = 10;

    try{
        const blogs = await prisma.blog.findMany({
            skip : Number(max*(page)),
            take : Number(max),
        })

        res.json({blogs, error : false})
    }
    catch(e){
        console.log(e);
        res.json({error : true, msg : "Something went wrong"});
    }

};

export async function postBlog(req, res){
    const {title, content} = req.body;
    const id = req.user.id;

    try{
        const newBlog = await prisma.blog.create({
            data : {
                title,
                content,
                authorId : id,
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

export function deleteBlog(req, res){
    const id = req.query.id;

    try{
        const blog = prisma.blog.delete({
            where : {id}
        });
        res.json(blog);
    }
    catch(e){
        console.log(e);
        res.json(e);
    }
};