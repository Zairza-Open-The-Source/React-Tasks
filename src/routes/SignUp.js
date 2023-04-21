import React from 'react'

import SignUpForm from '../components/Sign-Up/SignUpForm';
const SignUp = () => {
    const handleSubmit = (data) => {
        // console.log(data);
        localStorage.setItem('userData', JSON.stringify(data))
      };
  return (
    <div className='flex flex-col justify-center items-center text-center '>
    <div className='text-3xl p-3'>Sign Up Form</div>
      <SignUpForm OnSubmit={handleSubmit}/>
    </div>
  )
}

export default SignUp