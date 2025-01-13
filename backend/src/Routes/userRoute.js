import cookieParser from "cookie-parser";
import {Router} from "express";
import {getProfileDetails, updateProfile} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.use(cookieParser());

userRouter.get('/profile', getProfileDetails);

userRouter.put('/profile', updateProfile);

export default userRouter;