import express from 'express';
const notesRouter = express.Router();
import fetchuser from '../middleware/fetchuser.js';
import Note from '../models/Note.js'
import {Schema} from 'mongoose';
import { body , validationResult } from  "express-validator";

//Route 1 : Get all the notes using :GET "/api/notes/fetchallnotes" LOgin required
notesRouter.get('/fetchallnotes',fetchuser, async (req, res) => {
   try {
       const notes = await Note.find({user: req.user.id});
       res.json(notes);
    
   } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
   } 
    
});

//Route 2 : Add a new Note using :POST "/api/notes/addnote" LOgin required
notesRouter.post('/addnote',fetchuser,[
    body('title','Enter a valid title').isLength({min:3}),
    body('description','description must be atleast 5 characters').isLength({min:5}),
], async (req, res) => {
    try {
        const {title,description,tag} = req.body;
        const errors=validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors : errors.array()});
         }
    
         const note = new Note({
            title,description,tag,user: req.user.id
         })
         const savedNote = await note.save()
        res.json(savedNote); 
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
    
});

//Route 3 : update an existing Note using :POST "/api/notes/updatenote" LOgin required
notesRouter.put('/updatenote/:id',fetchuser, async (req, res) => {
    const {title,description,tag} = req.body;
    //create a newNote object
    const newNote = {};
    if(title) {newNote.title = title};
    if(description) {newNote.description = description};
    if(tag) {newNote.tag = tag};

    //find the note to be updated and update it 
    let note = await Note.findById(req.params.id);
    if (!note)  {return res.status(404).send("Not found")}

    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
    res.json({note});
})
export default  notesRouter;