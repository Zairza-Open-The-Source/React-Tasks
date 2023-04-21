 import React from 'react'
 import './App.css'
 import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'
import Achievements from './Components/Achievements/Achievements'
import { Routes,Route } from 'react-router-dom'
import Signup from './Components/Signup/Signup'
import DataDisplay from './Components/DataDisplay/DataDisplay'
 export default function App() {
   return (
     <div>  <Navbar/>
      <Routes>
    
    <Route path='/projects' element ={<Projects/>}/>  
    <Route path='/achievements' element ={<Achievements/>}/>  
      <Route path='/' element ={<DataDisplay/>}/>   
      <Route path='/signup' element ={<Signup/>}/>   
      
      </Routes>
     </div>
   )
 }
 