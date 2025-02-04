import React from 'react'
import me from  '../../image/me.jpg'
import './AboutMe.css'
const AboutMe = () => {
  return (
    <div className='aboutmecontainer'>
        <div className='aboutmeimg'>
            <img src={me}></img>
        </div>

        <div className='aboutmeinfo'>
        <h1>About Me</h1>
      <p>Hello {<>👋</>}, I'm Kausik saha</p>
      <p>Looking forward for an opportunity of working in a dynamic, challenging environment, where I can utilize my skills and knowledge for developing my career, for the growth of the organization and especially for contributing towards the advancement of the technology which could contribute towards the welfare of the society.</p>
      <h3>Highest Qualification: <span>M.C.A</span></h3>
      <h3>DOB: <span>30/07/1998</span></h3>
      <h3>Experience: <span>IT ASSOCIATE AT THEISM GROUP</span></h3>
      <h3>Interest: <span>Development</span></h3>
      <a href='/Kausik_Saha.pdf' target='_blank'><button>Download CV</button></a>
      </div>
    
    </div>
  )
}

export default AboutMe
