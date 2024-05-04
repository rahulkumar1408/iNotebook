import React from 'react'
import noteContext from '../context/notes/noteContext'
import { useContext } from 'react';

export default function NoteItem(props) {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const {note,updateNote} = props;
  return (
    <div className='col-md-3'>
        <div className='card mx-5 mb-4 shadow-sm my-3'>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{note.description}</p>
            <div className='flex'>
            <svg className="icon w-6 h-6 text-gray-800 dark:text-white mt-4 hover:text-red-600" onClick={() => {deleteNote(note._id);props.ShowAlert("Deleted Successfully","Success");}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
            </svg>
            <svg className="icon w-6 h-6 text-gray-800 dark:text-white ml-4 mt-4 hover:text-red-600" onClick={() => {updateNote(note);}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
            </svg>
            </div>
            </div>
        </div>
    </div>
  )
}
