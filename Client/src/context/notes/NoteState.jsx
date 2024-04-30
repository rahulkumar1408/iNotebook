import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesIntial = [
        {
          "_id": "662d07e49984e68f747e5b46",
          "user": "662be03595ccd06ee69c2893",
          "title": "My title1",
          "description": "Please1 wake up early",
          "tag": "personal1",
          "date": "2024-04-27T14:12:52.337Z",
          "__v": 0
        },
        {
          "_id": "662d080e9984e68f747e5b48",
          "user": "662be03595ccd06ee69c2893",
          "title": "My title1",
          "description": "Please1 wake up early",
          "tag": "personal1",
          "date": "2024-04-27T14:13:34.111Z",
          "__v": 0
        },
        {
            "_id": "662d080e9984e68f747e5b48",
            "user": "662be03595ccd06ee69c2893",
            "title": "My title1",
            "description": "Please1 wake up early",
            "tag": "personal1",
            "date": "2024-04-27T14:13:34.111Z",
            "__v": 0
        },
        {
            "_id": "662d080e9984e68f747e5b48",
            "user": "662be03595ccd06ee69c2893",
            "title": "My title1",
            "description": "Please1 wake up early",
            "tag": "personal1",
            "date": "2024-04-27T14:13:34.111Z",
            "__v": 0
        },
        {
            "_id": "662d080e9984e68f747e5b48",
            "user": "662be03595ccd06ee69c2893",
            "title": "My title1",
            "description": "Please1 wake up early",
            "tag": "personal1",
            "date": "2024-04-27T14:13:34.111Z",
            "__v": 0
        },
        {
            "_id": "662d080e9984e68f747e5b48",
            "user": "662be03595ccd06ee69c2893",
            "title": "My title1",
            "description": "Please1 wake up early",
            "tag": "personal1",
            "date": "2024-04-27T14:13:34.111Z",
            "__v": 0
        },
        {
            "_id": "662d080e9984e68f747e5b48",
            "user": "662be03595ccd06ee69c2893",
            "title": "My title1",
            "description": "Please1 wake up early",
            "tag": "personal1",
            "date": "2024-04-27T14:13:34.111Z",
            "__v": 0
        }
      ]
    const [notes,setNotes] = useState(notesIntial);
    return (
        <NoteContext.Provider  value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;