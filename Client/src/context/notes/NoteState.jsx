import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesIntial = []
    const [notes,setNotes] = useState(notesIntial);
    // Get all Note
    const getNotes = async () => {
        //Api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`,{
            method:"GET",
            headers: {
                'content-type' : 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        })
        const json = await response.json();
        setNotes(json);
      }
    // Add a Note
      const addNote = async (title,description,tag) => {
        //Api call
        const response = await fetch(`${host}/api/notes/addnote`,{
            method:"POST",
            headers: {
                'content-type' : 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({"title":title,"description":description,"tag":tag})
        })
        const note = {
            "_id": "662d080e9c984e68f747e5bh481",
            "user": "662be03595ccd06ee69c28934",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-04-27T14:13:34.111Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
      }
    // Delete a Note
    const deleteNote = async (id) => {
        //Api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
            method:"DELETE",
            headers: {
                'content-type' : 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        })
        const json = response.json();
        console.log(json);
        const newNotes = notes.filter((note) => {return note._id !== id})
        setNotes(newNotes);
    }
    // Update a Note
    const editNote = async (id,title,description,tag) => {
        //Api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
            method:"PUT",
            headers: {
                'content-type' : 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({"_id":id,"title":title,"description":description,"tag":tag})
        })
        const json = await response.json();
        //logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id === id){
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }
    return (
        <NoteContext.Provider  value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;