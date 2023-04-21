import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navbar = () => {
  return (
    <div className=' p-5 shadow-2xl'>
       <ul className='flex flex-row justify-between items-center '>
         <li className='text-3xl font-bold'>
         <a href='/'>OPEN THE SOURCE</a>  
         </li>
         <div className='flex flex-row space-x-10 items-center '>
        <li>
          <a href="/">REACT</a> 
         </li>
         <li>
         <a href="/">FLUTTER</a> 
         </li>
         <li>
         <a href="/">NODE JS</a> 
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