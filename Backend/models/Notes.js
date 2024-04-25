import mongoose, { Schema } from 'mongoose';

const NotesSchema = new Schema({
   title:{
    type: String,
    required : true
   },
   description:{
    type: String,
    required : true,
    unique: true
   },
   tag:{
    type: String,
    default : "General"
   },
   date:{
    type: Date,
    default : Date.now
   },
});

export default mongoose.model('notes', NotesSchema); 