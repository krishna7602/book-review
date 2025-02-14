const express=require('express');
const router=express.Router();
const {body}=require('express-validator');
const adminController=require('../controller/admin.controller');


router.post('/signup',
    [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min: 5}).withMessage('Password must be at least 5 characters long')
    ], adminController.signup);

router.post('/login',[
    body('email').isEmail().withMessage('please enter email'),
    body('password').isLength({min: 5}).withMessage('Password must be at least 5 characters long')
],adminController.login);



module.exports=router;