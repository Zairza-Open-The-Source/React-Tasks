import React, { useState } from 'react';
import SignupForm from './Signup';
import ProfilePage from './Profile';
import Navbar from "./Navbar"


const App = () => {
  const [users, setUsers] = useState([]);

  const handleSignup = (user) => {
    setUsers([...users, user]);
    // Store the user data locally
    localStorage.setItem('users', JSON.stringify(users));
  };

  return (
    <div>
      <Navbar/>
      {users.length === 0 && <SignupForm onSubmit={handleSignup} />}
      {users.length > 0 && <ProfilePage users={users} />}
    </div>
  );
};

export default App;





















// import './App.css';
// import Signup from "./Signup"
// import Profile from "./Profile"
// import Navbar from "./Navbar"
// import { BrowserRouter as Router, Route , Routes} from "react-router-dom";


// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<Signup/>} />
//           <Route exact path="/profile" element={<Profile/>} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

