const mongoose=require('mongoose')
const bcrtpt=require('bcrypt')
const jwt=require('jsonwebtoken')


const adminSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})


adminSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id,role:this.role},process.env.JWT_SECRET);
    return token;
}

adminSchema.statics.hashPassword=async function(password){
    return await bcrtpt.hash(password,8);
}

adminSchema.methods.comparePassword=async function(password){
    return await bcrtpt.compare(password,this.password);
}

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;