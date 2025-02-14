const User = require("../models/user.model");
const bcrypt = require("bcrypt"); // ✅ Correct spelling
const jwt = require("jsonwebtoken");


module.exports.authUser=async (req,res,next)=>{
    const token=req.cookies.token||req.headers.authorization.split(' ')[1];
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }


    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const user=await User.findById(decoded._id);
        if(!user){
            return res.status(401).json({message:"Unauthorized"});
        }
        req.user=user;
        return next();
    }catch(error){
        return res.status(401).json({message:"Unauthorized"});
    }
}