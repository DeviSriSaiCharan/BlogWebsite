import { Router } from "express";
import { getAllBlogs, postBlog, getBlog, deleteBlog, createLike, deleteLike } from "../controllers/blog.controller.js";
import cookieParser from 'cookie-parser';

const blogRoute = Router();

blogRoute.use(cookieParser());

blogRoute.get('/', getAllBlogs);

blogRoute.post('/', postBlog);

blogRoute.get('/get', getBlog);

blogRoute.delete('/', deleteBlog);

blogRoute.post('/like', createLike);

blogRoute.delete('/like', deleteLike);

export default blogRoute;