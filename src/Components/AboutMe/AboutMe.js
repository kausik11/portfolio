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
      <p>Hello <span>👋</span>, I'm Kauisk saha</p>
      <p>Looking forward for an opportunity of working in a dynamic, challenging environment, where I can utilize my skills and knowledge for developing my career, for the growth of the organization and especially for contributing towards the advancement of the technology which could contribute towards the welfare of the society.</p>
      <h3>Highest Qualification:<span>M.C.A</span></h3>
      <h3>DOB:<span>5464/61/61</span></h3>
      <h3>Experience:<span>M.C.A</span></h3>
      <h3>Interest:<span>skjvbsdj-sjvbsjd-sdjbsd-sdcb</span></h3>
      <button>Download CV</button>
      </div>
    
    </div>
  )
}

export default AboutMe
