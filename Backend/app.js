const express=require('express');
const app=express();
require('dotenv').config();
const cors = require('cors');
const connectToDB = require('./db/db');
connectToDB();
app.use(cors());
const userRoutes=require('./routes/user.routes');
const adminRoutes=require('./routes/admin.routes');
const cookieParser = require('cookie-parser');


app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/user',userRoutes);
app.use('/admin',adminRoutes);


module.exports=app;