import React from 'react'
import { useNavigate } from 'react-router-dom'
const Account = () => {
    const navigate =useNavigate();
    const data = JSON.parse(localStorage.getItem('userData'))
    console.log(data)
    
    const handleClick =() =>{
        localStorage.removeItem('userData');
        navigate('/sign-up')
    }
    if(data === null) {
        return(<>
        pls sign up first
        </>)
    }
  return (
    <>
    <div className='text-5xl underline text-center'>
    <h1>USER PROFILE</h1>
     <div className='flex flex-col justify-center items-cebntertext-left  text-sm no-underline mt-44'>
        <p>NAME:   {data.userName}</p>
        <p>EMAIL:   {data.email}</p>
        <p>PASSWORD:   {data.password}</p>
     </div>
   <button type='button' onClick={handleClick} className='bg-black text-xs text-white p-3'>DELETE USER</button>
    </div>
    
    </>
  )
}

export default Account