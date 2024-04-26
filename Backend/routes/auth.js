import express from 'express';
import User from '../models/User.js'
import { Schema } from 'mongoose';
import { body , validationResult } from  "express-validator";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const authRouter = express.Router();

const JWT_SECRET = 'Rahulisagoodb$oy'
//crate a user using : post "/api/auth/createuser". No login required
authRouter.post('/createuser',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','password must be atleast 5 characters').isLength({min:5}),
], async (req, res) => {
    //if there are errors , return Bad request and the errors
    const errors=validationResult(req);
     if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
     }
     // check whether the user with this email exists already
     try{
     let user = await User.findOne({email: req.body.email});
     console.log(user);
     if(user){
        return  res.status(400).json("User already exists");
     }
     const salt = await bcrypt.genSalt(10);
     const secPass = await bcrypt.hash(req.body.password,salt);

     //create a new user
    user = await User.create({
        name : req.body.name,
        password : secPass,
        email : req.body.email,
     });
     const data = {
        user:{
            id: user.id
        }
     }
     const authtoken = jwt.sign(data,JWT_SECRET);

     res.json({authtoken});
     
    }catch(error){
        console.error(error.message);
        res.status(500).send("Some Error occured");
    }
});

export default  authRouter;