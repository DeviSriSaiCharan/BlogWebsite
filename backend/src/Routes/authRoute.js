import { Router } from 'express';
import { signUp, signIn } from '../controllers/auth.controller.js';

const authRoute = Router();

authRoute.post('/signUp', signUp);

authRoute.post('/signIn', signIn);

export default authRoute;
