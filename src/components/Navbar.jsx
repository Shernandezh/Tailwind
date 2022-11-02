import React from 'react'
import {Link} from 'react-router-dom';
import Buttons from './Buttons';
const Navbar = () => {
  return (
    <div className='h-14 bg-gradient-to-r from-sky-400 to-indigo-400 fixed w-full text-black flex justify-between p-4 items-center'>
            <div className='text-1xl font-bold text-center'>
            <h1><span className='block'>logo</span></h1>
            </div>
     <nav>
       <ul className='md:flex items-center gap-8 p-5 uppercase bg-black/9'>
        <li><Link to='/'>Home</Link></li> 
        <li><Link to='/'>cerrar seccion</Link></li> 
        <li><Link to='/'>Home</Link></li> 
        <li><Link to='/'>Home</Link></li> 
   
        <Buttons />
        </ul> 
     </nav>
    </div>



  )
}

export default Navbar