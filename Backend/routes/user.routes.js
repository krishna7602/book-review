const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controller/user.controller');
const  authMiddleware= require('../middleware/auth.middleware');

router.post('/signup',[
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min: 5}).withMessage('Password must be at least 5 characters long')
],userController.signup);

router.post('/login',[
    body('email').isEmail().withMessage('please enter email'),
    body('password').isLength({min: 5}).withMessage('Password must be at least 5 characters long')
],userController.login);


router.get('/profile',authMiddleware.authUser,userController.profile);


module.exports = router;