import React from 'react'
import './projects.css'

const data =[
    {
        id: 1,
        title: 'Bank Web',
        github: ' https://github.com/pgs17/Bank_Web'
      },
      {
        id: 2,
        title: 'Cue Card',
        github: ' https://github.com/pgs17/Bank_Web'
      }, 
      {
        id: 3,
        title: 'Digital System design ',
        github: ' https://github.com/pgs17/Bank_Web'
      },
      {
        id: 4,
        title: 'Football Blog Site',
        github: 'https://github.com/pgs17/React-js'
      },
      
]

export default function Projects() {
  return (
    <section id="projects">
      <h4>My Recent Works</h4>
      <div className='container project_container'>
        {
               data.map(({id,title,github}) => {
                return(
                  <article key={id} className='portfolio_item'>
                    <h3>{title}</h3>
                    <a href={github} className='btn'>Github</a>
                  </article>
                )
              })
        }

      </div>
    </section> 
  )
}
