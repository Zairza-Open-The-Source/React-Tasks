import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className=' p-5 shadow-2xl'>
       <ul className='flex flex-row justify-between items-center '>
         <li className='text-3xl font-bold'>
         <NavLink to='/'>SAHIL.</NavLink>  
         </li>
         <div className='flex flex-row space-x-10 items-center '>
        <li>
          <NavLink to="/">Home</NavLink> 
         </li>
         <li>
         <NavLink to="projects">PROJECTS</NavLink> 
         </li>
         <li>
         <NavLink to="achievements">ACHIEVEMENTS</NavLink> 
         </li>
         <li>
            <AccountCircleIcon fontSize='large'/>
         </li>
         </div>
       </ul>


    </div>
  )
}

export default Navbar