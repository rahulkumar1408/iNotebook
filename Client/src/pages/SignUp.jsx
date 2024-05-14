import React,{ useState } from 'react'
import {useNavigate} from 'react-router-dom'

function SignUp(props) {
  const [credentials,setCredentials] = useState({email:"",password:"",cpassword:"",fname:"",lname:""});
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/sign-in");
  }
  const handleSubmit = async (e)=> {
    const host = "https://inotebook-7.onrender.com"
    e.preventDefault();
    const {email,password,fname,lname} = credentials;
    const name = `${fname} ${lname}`;
    const response = await fetch(`${host}/api/auth/createuser`,{
      method:"POST",
      headers: {
          'content-type' : 'application/json',
      },
      body: JSON.stringify({name , email , password})
  })
    const json = await response.json();
    console.log(json);
    if(json.success) {
      // save the auth token and redirect
      localStorage.setItem( 'token' , json.authtoken );
      navigate("/");
      props.ShowAlert("Account Created Successfully", "success")
    }
    else{
      props.ShowAlert("Invalid credentials", "danger")
    }
  }

  const onChange = (e) => {
    setCredentials({...credentials , [e.target.name]: e.target.value })
  }
  return (
    <div className=' flex container h-screen '>
    {/* <div className=' m-3 w-3/5  flex items-center justify-center bg-gray-200'>
      <div className='w-full h-full overflow-hidden'>
      <img class="ml-44 w-half h-half object-fill rounded-lg max-w-full" src="https://cdni.iconscout.com/illustration/premium/thumb/app-login-5188522-4346990.png" alt="image description"></img>
      </div>
    </div> */}
      <form className=" right-0 mx-40 my-6 " onSubmit={handleSubmit}>
      <h2 className='place-self-center font-bold mt-5 text-2xl'>Create a new account </h2>
      <h2 className='place-self-center text-sm my-3'>Use your email to create new account </h2>
        <div className="relative z-0 w-full mb-5 group">
            <input type="email" name="email" id="email" onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 rounded-lg border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
            <label htmlFor="email" className="ml-2 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-black">Email address</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
            <input type="password" name="password" id="password" onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 rounded-lg border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " minLength={5} required />
            <label htmlFor="password" className="ml-2 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-black">Password</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
            <input type="cpassword" name="cpassword" id="cpassword" onChange={onChange}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 rounded-lg border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " minLength={5} required />
            <label htmlFor="cpassword" className="ml-2 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-black">Confirm password</label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="fname" id="fname" onChange={onChange}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0  rounded-lg border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
              <label htmlFor="fname" className="ml-2 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-black">First name</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="lname" id="lname" onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 rounded-lg border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
              <label htmlFor="lname" className="ml-2 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-black">Last name</label>
          </div>
          <div className="flex items-start mb-7 mt-0 object-fill">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  required/>
          </div>
          <label htmlFor="remember" className="text-nowrap ms-2 text-sm font-small text-gray-900 dark:text-gray-300">I have read the Terms and Conditions</label>
        </div>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-100 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register Now</button>
        <h2 className='text-sm mt-3'>Have an account?<a href="#" onClick = {handleClick} className="ml-2 underline hover:underline ... text-blue-800">login</a></h2>
        
      </form>

    </div>
  )
}

export default SignUp;
