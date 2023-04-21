import React from 'react'

const Navbar = () => {
  return (
    <div className=' p-5 shadow-2xl'>
       <ul className='flex flex-row justify-between items-center '>
         <li className='text-3xl font-bold'>
           OPEN THE SOURCE
         </li>
         <div className='flex flex-row space-x-10 '>
         <li>
            HOME
         </li><li>
           REACT
         </li><li>
            FLUTTER
         </li><li>
            BACKEND
         </li>
         </div>
       </ul>


    </div>
  )
}

export default Navbar