import React from 'react'
import './Achievements.css'
import{BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
  
    <section id='experience'> 
    <h5>Skills Possessed by Me </h5>
    <h2>My Experience</h2>
    

    <div className="container experience_container">
      <div className="frontend_experience">
       <h3>FRONTEND SKILLS</h3>
       <div className="experience_content">
         <article className='experience_details'>
           
          <h4>Worked on a project with Zairza Club Of OUTR</h4>
          <small className='text-light'> OPEN SOURCE</small>
         </article>
         <article className='experience_details'>
          
          <h4>Intern at Roulkela Steel Plant from June 2022 to July 2022</h4>
          <small className='text-light'>Traineee</small>
         </article>
         <article className='experience_details'>
          <BsPatchCheckFill className='icon'/>
          <h4>JAVASCRIPT</h4>
          <small className='text-light'>Intermediate</small>
         </article>
         <article className='experience_details'>
          <BsPatchCheckFill className='icon'/>
          <h4>TAILWIND CSS</h4>
          <small className='text-light'>Intermediate</small>
           </article>
          <article className='experience_details'>
          <BsPatchCheckFill className='icon'/>
          <h4>REACT JS</h4>
          <small className='text-light'>Starter</small>
         </article>
         <article className='experience_details'>
          <BsPatchCheckFill className='icon'/>
          <h4>MATERIAL UI</h4>
          <small className='text-light'>Starter</small>
         </article>
       </div>
      </div>
      
    </div>
    </section>
  )
}

export default Experience