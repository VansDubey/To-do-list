import React from 'react'
import Task from '../assets/Task.png'


const Navbar = () => {
  return (
    <div className="navbar bg-violet-900 h-[14vh] rounded-lg flex items-center justify-between p-2">
      <div className="logo">
        <img className="invert h-[18vh] md:h-[28vh]" src ={Task}/>
      </div>
      <div className="functions flex items-center list-none gap-4 text-white">
        <li  className=" hover:font-bold hover:transition-all hover:cursor-pointer">Home</li>
        <li className="hover:font-bold hover:transition-all hover:cursor-pointer">Contact Us</li>
        <li className="hover:font-bold hover:transition-all hover:cursor-pointer">More</li>
      </div>
    </div>

  )
}

export default Navbar
