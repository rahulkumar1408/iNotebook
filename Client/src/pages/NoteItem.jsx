import React from 'react'

export default function NoteItem(props) {
    const {note} = props;
  return (
    <div className='col-md-3'>
        <div className='card mb-4 shadow-sm my-3'>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{note.description}</p>
            </div>
        </div>
    </div>
  )
}
