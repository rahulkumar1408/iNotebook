// const mongoose = require('mongoose');
import 'dotenv/config';
import mongoose from 'mongoose';
const mongoURI = process.env.mongoURI;

const ConnectToMongo = async ()=>{
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
      } catch (error) {
        console.error('Error connecting to MongoDB:', error);
      }
}

export default ConnectToMongo;