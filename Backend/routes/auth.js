import express from 'express';
import User from '../models/User.js'
import { Schema } from 'mongoose';

const authRouter = express.Router();

authRouter.post('/', (req, res) => {
    res.send(req.body);
    const user = User(req.body);
    user.save();
    console.log(req.body);
});

export default  authRouter;