import './App.css';

import Navbar from "./Navbar"
import Main from "./Main"
import Project from "./Project"
import Achievement from "./Achievement"

import { BrowserRouter as Router, Route , Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/Project" element={<Project/>} />
          <Route exact path="/Achievement" element={<Achievement/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

