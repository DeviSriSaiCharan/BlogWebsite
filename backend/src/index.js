import express from 'express';
import dotenv from 'dotenv';
import {authRoute, blogRoute}from './Routes/exports.js';
import cors from 'cors';
import authenticateToken from './middlewares/authenticateToken.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors({origin : 'http://localhost:5173', credentials : true}))

app.use(express.json());

app.use('/api/v1/auth', authRoute);

app.use(authenticateToken);

app.use('/api/v1/blog', blogRoute);

app.listen(PORT,() => console.log("Listening at port: " + PORT));
