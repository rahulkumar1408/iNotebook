import React, { useEffect,useRef,useState } from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';
import AddNote from '../components/AddNote';
import {useNavigate} from 'react-router-dom'

export default function Notes(props) {
    const context = useContext(noteContext);
    const {notes,getNotes,editNote} = context; 
    let navigate = useNavigate();

    useEffect(() => {
      if(localStorage.getItem('token')){
        getNotes();
      }
      else{
        navigate("/sign-in")
      }
    })
    const ref = useRef(null);

    const [note , setNote] = useState({id: "",etitle: "", edescription:"", etag:""})

    const toggleModal = () => {
      const modalId = ref.current.dataset.modalTarget;
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.toggle('hidden');
        modal.setAttribute('aria-hidden', modal.classList.contains('hidden'));
      }
    }
    const updateNote = (currentNote) => {
      toggleModal();
      setNote({id: currentNote._id,etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
    }

    const handleClick = (e) => {
      e.preventDefault();
      editNote(note.id,note.etitle,note.edescription,note.etag);
      toggleModal();
      props.ShowAlert("Updated Successfully","Success");
    }
    const onChange = (e) => {
        setNote({...note , [e.target.name]: e.target.value })
    }
    
  return (
    <>
    <AddNote ShowAlert={props.ShowAlert} />
    

    <button ref={ref} data-modal-target="modalId" data-modal-toggle="modalId" onClick={toggleModal} className="hidden  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
      Toggle modal
    </button>

    <div id="modalId" tabIndex="-1" aria-hidden="true" className="  backdrop-blur-md hidden overflow-y-auto overflow-x-hidden fixed top-1/2 right-0 left-1/2  opacity-2 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-2xl max-h-full transition-opacity  ">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 border-4 border-blue-300 ">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Edit Note
                    </h3>
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => document.getElementById('modalId').classList.add('hidden')} data-modal-hide="modalId">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <form className="max-w-sm mx-auto">
                <div className="mb-5">
                  <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                  <input type="text" id="etitle" name='etitle' value = {note.etitle}className="w-full md:w-64 lg:w-96 px-4 py-2 border rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" onChange={onChange} />
                </div>
                <div className="mb-5">
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <input type="text" id="edescription" name='edescription' value = {note.edescription} className="w-full md:w-64 lg:w-96 px-4 py-2 border rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} />
                </div>
                <div className="mb-5">
                  <label htmlFor="tag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tag</label>
                  <input type="text" id="etag" name='etag' value = {note.etag} className="w-full md:w-64 lg:w-96 px-4 py-2 border rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} />
                </div>
              </form>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="modalId" type="button" onClick = {handleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Note</button>
                    <button data-modal-hide="modalId" type="button" onClick={() => document.getElementById('modalId').classList.add('hidden')} className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
                </div>
            </div>
        </div>
    </div>


    <div className='grid grid-cols-4 gap-4 my-3'>
        <div className='col-span-4 place-self-center'>
          <h6 className='text-lg font-bold'>Your Notes</h6>
        </div> 
        <div className='col-span-4 place-self-center'>
          <h6 className='text-lg font-bold'>⬇️</h6>
        </div> 
          {notes.map((note) => {
            return <NoteItem key = {note._id} updateNote = {updateNote} ShowAlert={props.ShowAlert} note={note}/>;
          })}
    </div>
    <div className='grid grid-cols-4 my-3'>
    <div className='col-span-4 place-self-center'>
        {notes.length === 0 && 'No notes to display'}
    </div>
    </div> 
    </>
  )
}
