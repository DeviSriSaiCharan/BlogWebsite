import jwt from 'jsonwebtoken';

export default function authenticateToken(req, res, next){

    const authHeader = req.body.authorization;

    if(!authHeader) res.json({isValid : false});

    const token = authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    }
    catch(err){
        console.log(err);
        res.json({isValid : false});
    }

}