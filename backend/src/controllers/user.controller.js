import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getProfileDetails(req, res){
    const userId = req.user;

    try{
        const response = await prisma.user.findUnique({
            where : {
                id : userId
            }
        })

        console.log(response);

        if(response) res.json({error : false, data : response});
        else res.status(404).json({error : true, msg : "User not found"});
    }
    catch(e){
        console.log("Error fetching Profile: ", e);
        res.status(500).json({error : true, msg : "Something went wrong"});
    }
}

export async function updateProfile(req, res){
    const userId = req.user;
    const data = req.body;

    try{
        const response = await prisma.user.update({
            where : {
                id : userId
            },
            data : data
        })

        if(response) res.json({msg : "Updated", isUpdated : true});
        else res.status(404).json({isUpdated : false, msg : "User not found"})
    }
    catch(e){
        console.log("Profile Update error: ", e);
        res.status(500).json({msg : "Something went wrong"})
    }
}