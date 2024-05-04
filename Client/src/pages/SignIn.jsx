import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function SignIn(props) {
  const [credentials,setCredentials] = useState({email:"",password:""});
  let navigate = useNavigate();

  const handleSubmit = async (e)=> {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`,{
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
    <div>
    <div className='grid my-7'>
      <h2 className='place-self-center font-bold'>Sign in to your account</h2>
    </div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" id="email" name='email' value={credentials.email} onChange = {onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
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
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Submit</button>
      </form>

    </div>
  )
}

export default  SignIn;
