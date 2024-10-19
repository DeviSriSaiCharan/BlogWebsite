import { Router } from 'express';
import { signUp, signIn, authCheck } from '../controllers/auth.controller.js';
import cookieParser from 'cookie-parser';

const authRoute = Router();

authRoute.use(cookieParser());

authRoute.post('/signUp', signUp);

authRoute.post('/signIn', signIn);

authRoute.get('/authCheck', authCheck);

export default authRoute;
