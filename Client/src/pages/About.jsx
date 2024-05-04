import React from 'react'
import img1 from '../images/p3.jpg'
import img2 from '../images/p1.jpg'
import img3 from '../images/p2.png'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate();
  const handleClick = ()=> {
    navigate('/sign-in')
  }
  const handlesign = ()=> {
    navigate('/sign-up')
  }
  return (
    <div className='relative'>
      <div className='flex w-full'>
        <img className='' src={img1} alt="main" />
        <div className='block mt-44'>
        <h1 className="font-bold text-red-500 display-4 text-2xl">Empowering  Students</h1>
        <p className='text-gray-500'>An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee</p>
        </div>
      </div>
      <div className='relative flex justify-center'>
        <div className=' m-10 left-0 w-half '>
          <p className=''>
            <h2 className='text-red-500 font-bold text-lg mb-3'>Make Something Awesome</h2>
            <span className=''>iNotebook</span> is made from the pain of writing all the things in notebook which is very hectic :(, So we mad an online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee. you can also access your notes anywhere in your world, at anytime time. So dont forget to Create note because creating anything is always important
          </p>
          <div className='flex justify-center mt-10'>
          <button type="createNote" onClick={handleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-half sm: px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Note</button>
          </div>
        </div>
        <div className=' w-full h-full'>
          <img className='w-full h-half' src={img2} alt="main2" />
        </div>
      </div>
      <div className='ml-24 relative flex justify-center w-auto h-auto'>
      <img className='w-half h-half' src={img3} alt="main3" />
      <div className='block mr-10 w-96'>
      <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Powering the <span style={{ color: "#9C27B0" }}>internet’s visuals</span> </h2>
      <p>
          How we started? The concept was simple. iNotebook was born from the pain of writing all the things in notebook which is very hectic :( .
          An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee
      </p>
      <div className=' justify-center mt-10'>
      <button type="createNote" onClick={handlesign} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-half sm: px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
      </div>
      </div>
      
      </div>
      <div>

      </div>
    </div>
  )
}

export default About
