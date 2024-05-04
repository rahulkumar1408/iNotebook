import React from 'react'
import {Button, Navbar, TextInput} from 'flowbite-react';
import {Link , useLocation} from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai';
import {FaMoon} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'


export default function Header() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/sign-in");
  }
  const path = useLocation.pathname;
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>iNotebook</span>
        </Link>
        <form>
            <TextInput 
              type='text'
              placeholder='Search...'
              rightIcon={AiOutlineSearch}
              className='hidden lg:inline'
            />
        </form>
        <Button className='w-12 h-10 lg: hidden' color='gray' pill>
          <AiOutlineSearch/>
        </Button>
        <div className='flex gap-2 md:order-2'>
          <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
            <FaMoon />
          </Button>
          {!localStorage.getItem('token')?<form className='flex'>
          <Link className='mx-1' to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue'>
              Login
            </Button>
          </Link>
          <Link className='mx-1' to='/sign-up'>
            <Button gradientDuoTone='purpleToBlue'>
              SignUp
            </Button>
          </Link>
          </form>: <Button onClick={handleLogout} gradientDuoTone='purpleToBlue'>
              Logout
            </Button>}
          <Navbar.Toggle/>
        </div>
          <Navbar.Collapse>
              <Navbar.Link active={path === '/'} as={'div'}>
                <Link to='/'>
                  Home
                </Link>
              </Navbar.Link>
              <Navbar.Link active={path === '/about'} as={'div'}>
                <Link to='/about'>
                  About
                </Link>
              </Navbar.Link>

          </Navbar.Collapse>
    </Navbar>
  )
}