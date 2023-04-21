import React from 'react';

const Profile = ({ users }) => {
  return (
    <div>
      <h1>Profile Page</h1>
      {users.map((user, index) => (
        <div key={index}>
          <h2>User {index + 1}</h2>
          <p>User Name: {user.userName}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Profile;





























// import React, { useState, useEffect } from 'react'

// export default function Profile() {
//     const [userData, setUserData] = useState({})
//     useEffect(() => {
//         let userData = localStorage.getItem("userData")
//         console.log("Usrdata = ", userData);
//         setUserData(JSON.parse(userData));
//     }, [])


//     return (
//         <div className='profile'>
//             <h1>Profile Page</h1>
//             <p><span>Username:</span> <span>{userData.username}</span> </p>
//             <p><span>email:</span> <span>{userData.email}</span> </p>
//             <p><span>password:</span> <span>{userData.password}</span> </p>
//         </div>
//     )
// }
