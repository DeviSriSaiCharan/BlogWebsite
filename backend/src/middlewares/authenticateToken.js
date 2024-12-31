import jwt from 'jsonwebtoken';
import  dotenv from 'dotenv';

dotenv.config();

export default function authenticateToken(req, res, next){

    const authHeader = req.headers.cookie;
    if(!authHeader) return res.json({isValid : false});

    try{
        const token = authHeader.split("=")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.id;
        next();
    }
    catch(err){
        console.log(err);
        res.json({isValid : false});
    }

}