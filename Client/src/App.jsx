import React from 'react'
import {BrowserRouter, Routes , Route} from "react-router-dom"
import  Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';

export default function App() {
  return (
    <NoteState>
    <BrowserRouter>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp />}/>
      </Routes>
    </div>
    </BrowserRouter>
    </NoteState>
  )
}
