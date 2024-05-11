import React, { useState } from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

function AddNote(props) {
    const context = useContext(noteContext);
    const {addNote} = context; 
    const [note , setNote] = useState({title: "", description:"", tag:""})
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title: "", description:"", tag:""});
        props.ShowAlert("Added Successfully","Success");
    }
    const onChange = (e) => {
        setNote({...note , [e.target.name]: e.target.value })
    }
  return (
    <div>
    <div className='container grid my-3'>
        <div className='place-self-center'>
          <h1 className='text-lg font-bold text-white-500'>Add Notes</h1>
        </div> 
    </div>
    <div className='container grid my-5'>
      <div className='place-self-center'>
          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
              <input type="text" id="title" name='title' value={note.title} className="w-full md:w-64 lg:w-96 px-4 py-2 border rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" onChange={onChange} />
            </div>
            <div className="mb-5">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <input type="text" id="description" name='description'value={note.description}  className="w-full md:w-64 lg:w-96 px-4 py-2 border rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} />
            </div>
            <div className="mb-5">
              <label htmlFor="tag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tag</label>
              <input type="text" id="tag" name='tag'value={note.tag}  className="w-full md:w-64 lg:w-96 px-4 py-2 border rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleClick}>Add Note</button>
          </form>
      </div>
    </div>
    </div>
  )
}

export default AddNote
