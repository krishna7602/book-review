const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrtpt=require('bcrypt');


const userSchema=new mongoose.Schema({
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
    

   
});

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id,role:this.role},process.env.JWT_SECRET);
    return token;
}

userSchema.statics.hashPassword=async function(password){
    return await bcrtpt.hash(password,8);
}

userSchema.methods.comparePassword=async function(password){
    return await bcrtpt.compare(password,this.password);
}

const User = mongoose.model("User", userSchema);

module.exports = User;