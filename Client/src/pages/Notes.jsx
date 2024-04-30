import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';

export default function Notes() {
    const context = useContext(noteContext);
    const {notes , setNotes} = context; 
  return (
    <div className='grid grid-cols-4 gap-4 my-3'>
        <div className='col-span-4 place-self-center'>
          <h6 className='font-bold'>Your Notes</h6>
        </div>  
          {notes.map((note) => {
            return <NoteItem note={note}/>;
          })}
    </div>
  )
}
