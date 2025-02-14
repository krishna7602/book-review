const express = require('express');
const Admin = require('../models/admin.model'); 

module.exports.signup = async (data) => {
    try {
        const { name, email, password } = data;
        const newAdmin = new Admin({
            name,
            email,
            password
        });

        return await newAdmin.save();
    } catch (error) {
        console.error('Error in admin signup:', error);
        throw error;
    }
};
