import express from 'express';
import dotenv from 'dotenv';
import authRoute from './Routes/authRoute.js';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors({origin : 'http://localhost:5173', credentials : true}))

app.use(express.json());

app.use('/api/v1/auth', authRoute);

app.listen(PORT,() => console.log("Listening at port: " + PORT));
