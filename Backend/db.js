// const mongoose = require('mongoose');
import mongoose from 'mongoose';
const mongoURI = "mongodb://localhost:27017/"

const ConnectToMongo = async ()=>{
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
      } catch (error) {
        console.error('Error connecting to MongoDB:', error);
      }
}

export default ConnectToMongo;