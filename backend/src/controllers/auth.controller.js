import bcrypt from "bcrypt";
import {PrismaClient} from '@prisma/client';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const prisma = new PrismaClient();

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export async function signUp(req, res){

    const {username, password, email} = req.body;

    const hashPass = bcrypt.hashSync(password, 10);

    try{
        const newUser = await prisma.user.create({
            data : {
                username,
                password : hashPass, 
                email,
            }
        })

        res.json({newUser : newUser, msg : "Account created successfully", isCreated : true})
    }
    catch(e){
        if(e.code && e.code == "P2002") res.json({msg : "User already exists with same email", isCreated : false});
        else res.json({err : e, msg : "Something went wrong", isCreated : false})
    }
}

export async function signIn(req, res){
    
    const {email, password} = req.body;

    try{
        const user = await prisma.user.findUnique({
            where : {email}
        })
        
        if(user){
            const isValid = bcrypt.compareSync(password, user.password);
            if(isValid){
                const token = jwt.sign({id : user.id, }, JWT_SECRET, {expiresIn : '1h'})
                res.json({msg : "Logged in successfully", isLoggedIn : true, user, token})
            }
            else res.json({msg : "Invalid password", isLoggedIn : false})
        }
        else{
            res.json({msg : "User not found", isLoggedIn : false})
        }

    }
    catch(e){
        console.log(e);
        res.json({msg : "Somethin went wrong", isLoggedIn : false});
    }
}