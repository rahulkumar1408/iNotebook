import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function SignIn(props) {
  const host = "https://inotebook-7.onrender.com"
  const [credentials,setCredentials] = useState({email:"",password:""});
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/sign-up");
  }
  const handleSubmit = async (e)=> {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`,{
      method:"POST",
      headers: {
          'content-type' : 'application/json',
      },
      body: JSON.stringify({email:credentials.email,password:credentials.password})
  })
    const json = await response.json();
    console.log(json);
    if(json.success) {
      // save the auth token and redirect
      localStorage.setItem( 'token' , json.authtoken );
      props.ShowAlert("Logged In Successfully", "success")
      navigate("/");
    }
    else{
      props.ShowAlert("Invalid Details", "Something Wrong")
    }
  }

  const onChange = (e) => {
    setCredentials({...credentials , [e.target.name]: e.target.value })
  }

  return (
    <div className=' w-full h-full flex justify-center'>
      <form className=" w-auto h-50% ml-10 mt-32 max-w-md" onSubmit={handleSubmit}>
      <h2 className='place-self-center font-bold mt-5 text-2xl'>Sign in to your account</h2>
        <div className="mb-5 mt-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" id="email" name='email' value={credentials.email} onChange = {onChange} className="lg:w-96 bg-gray-50 border  px-4 py-2  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc@gmail.com" required />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password" id="password" name='password' value={credentials.password} onChange = {onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  />
          </div>
          <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-100 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Login</button>
        <h2 className='text-sm mt-3'>Don't Have an account?<a href="#" onClick = {handleClick} className="ml-2 underline hover:underline ... text-red-900">Register</a></h2>
      </form>

    </div>
  )
}

export default  SignIn;
