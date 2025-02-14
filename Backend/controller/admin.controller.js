const express = require('express');
const Admin = require('../models/admin.model'); 
const adminServices = require('../services/admin.service');
const { validationResult } = require('express-validator');

module.exports.signup = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(401).json({ errors: errors.array() });
    }

    try {
        const { name, email, password } = req.body;
        console.log(name, email, password);

        
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(409).json({ message: "Email is already registered" });
        }

        
        const hashPassword = await Admin.hashPassword(password);
        console.log(hashPassword);

        const newAdmin = await adminServices.signup({ name, email, password: hashPassword });

        const token = await newAdmin.generateAuthToken();
        
        res.status(201).json({ newAdmin, token });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


module.exports.login=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    try{
        const{email,password}=req.body;
        const admin=await Admin.findOne({email}).select('+password'); 

        if(!admin){
            return res.status(401).json({message:"Admin not found"});
        }

        const isMatch=await admin.comparePassword(password);
        if(!isMatch){
            return res.status(401).json({message:"Incorrect Password"});
        }

        const token=admin.generateAuthToken();

        res.cookie('token',token);

        res.status(200).json({admin,token});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
}