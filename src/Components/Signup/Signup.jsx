import React, { useState} from 'react';
import { useNavigate} from "react-router-dom";
import './Signup.css';
const Signup = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name:"",email:"",password:""
    });

    let name,value;
    const handleInput = (e) =>{
        name=e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value});
    }

    const postData = (e) =>{
        e.preventDefault();
        // const {name,email,password} = user;
        localStorage.setItem("userData", JSON.stringify(user));
        setUser({
            name:"",email:"",password:""
        });

        navigate("/");
    }

  return (
    <>
      <div className="container">
        <form className='slform' method='POST' >
          <h3>Sign Up</h3>
          <div className="ele">
            <input type="text" name="name" autoComplete='off' value={user.name} onChange={handleInput} placeholder='Name' />
          </div>
          <div className="ele">
            <input type="text" name="email" autoComplete='off' value={user.email} onChange={handleInput} placeholder='Email' />
          </div>
          <div className="ele">
            <input type="password" name="password" autoComplete='off' value={user.password} onChange={handleInput} placeholder='Password' />
          </div>
          <div className="submitbtn">
            <input type="submit" value="Submit" name='signup' className='slbtn' onClick={postData} />
          </div>
          
        </form>

         
      </div>
    </>
  )
}

export default Signup