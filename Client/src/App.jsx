import React, {useState} from 'react'
import {BrowserRouter, Routes , Route} from "react-router-dom"
import  Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

export default function App() {
  const [alert , setAlert] = useState(null);

  const ShowAlert = (message,type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },3000);
  }
  return (
    <NoteState>
    <BrowserRouter>
    <Navbar />
    <Alert alert={alert}/>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home ShowAlert={ShowAlert} />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/sign-in" element={<SignIn ShowAlert={ShowAlert}/>}/>
        <Route path="/sign-up" element={<SignUp ShowAlert={ShowAlert}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </NoteState>
  )
}
