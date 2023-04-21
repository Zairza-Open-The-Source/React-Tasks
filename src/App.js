import './App.css';
// import Signup from "./Signup"
// import Profile from "./Profile"
import Navbar from "./Navbar"
// import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Signup/>} />
          <Route exact path="/profile" element={<Profile/>} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
