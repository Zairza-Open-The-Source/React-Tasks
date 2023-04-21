import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SignUpForm = ({OnSubmit}) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (userName === '' || email ==='' || password === '') {
          alert('pls complete all inputs')
      }   
  
    //   console.log(userName,email,password);
      OnSubmit({ userName, email, password });
      navigate('/account')
      setEmail('')
      setUserName('')
      setPassword('')
    }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col space-y-5 '>
        <div className='flex flex-col space-y-2 w-96'>
        <label className='text-left text-xl'>
        User Name
        </label>
        <input
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          className='border-2 border-white rounded-sm bg-gray-500 text-white p-2'
        />
       
        </div>
        <div  className='flex flex-col '>
        <label className='text-left text-xl'>
        Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className='border-2 border-white rounded-sm bg-gray-500 text-white p-2'
        />
        
         </div>
         <div  className='flex flex-col space-y-2'>
      <label className='text-left text-xl'>
        Password:
        </label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className='border-2 border-white rounded-sm bg-gray-500 text-white p-2'
        />
     
      </div>
      <div>
      <button type="submit" className='bg-black text-xl text-white p-2 mt-10 border-black border-2 rounded-full w-96 hover:bg-white hover:text-black'>Submit</button>
      </div>
    </form>
  )
}

export default SignUpForm