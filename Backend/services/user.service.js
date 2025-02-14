const User = require("../models/user.model");

module.exports.signup = async ({name,email,password}) => {
    if(!name || !email || !password){
        throw new Error("Please provide all the required fields");
    }

    const user = new User({name,email,password});
    return user;
}

