const User = require("../models/user.model");
const userServices = require("../services/user.service");
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');


module.exports.signup = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.message);
    }
    
    const {name,email,password} = req.body;

    const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email is already registered." });
        }
    
    try {
        const hashPassword = await User.hashPassword(password);
        const user = await userServices.signup({name,email,password:hashPassword});
        
        
        const token = await user.generateAuthToken();
        res.status(201).send({user,token});
        await user.save();
    } catch (error) {
        res.status(400).send(error.message);
    } 
}


module.exports.login=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    try{
       const{email,password}=req.body;
       const user=await User.findOne({email}).select('+password'); 

        if(!user){
            return res.status(401).json({message:"User not found"});
        }

        const isMatch=await user.comparePassword(password);
        if(!isMatch){
            return res.status(401).json({message:"Incorrect Password"});
        }

        const token=user.generateAuthToken();

    

        res.cookie('token',token);

        res.status(200).json({user,token});
    }
    catch(error){
        res.status(400).send(error.message);
    }
}

module.exports.profile=async(req,res,next)=>{
    res.status(200).json({user:req.user});
}

