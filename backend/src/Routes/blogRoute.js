import { Router } from "express";
import { getAllBlogs, postBlog, getBlog, deleteBlog } from "../controllers/blog.controller.js";
import cookieParser from 'cookie-parser';

const blogRoute = Router();

blogRoute.use(cookieParser());

blogRoute.get('/', getAllBlogs);

blogRoute.post('/', postBlog);

blogRoute.get('/get', getBlog);

blogRoute.delete('/', deleteBlog);

export default blogRoute;