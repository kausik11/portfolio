import React from 'react'
import './Contact.css'
import facebook from '../../image/logo/facebook_logo.png'
import git from '../../image/logo/git_logo.png'
import gmail from '../../image/logo/gmail_logo.png'
import linkedin from '../../image/logo/linkedin_logo.png'

const Contact = () => {
  return (
     <div className='conatactcontainer'>
    <h2>Contact Me</h2>
    <div className='contactimg'>
      <img src='https://www.birlatrimaya.ind.in/wp-content/uploads/2023/07/Birla-Trimaya-Location.png'></img>
    </div>

    <div className='contactinfo'>
    <div>
        <h2>Address</h2>
        <p>click here to address me</p>
        <button>Visit on Google Map</button>
      </div>
      <div className='contactlogo'>
      <a href='https://github.com/kausik11'><img src={git} style={{width:"50px"}}></img></a>
      <a href='https://mail.google.com/mail/?view=cm&fs=1&to=kkausik11@gmail.com' target='_blank'><img src={gmail} style={{width:"50px"}}></img></a>
     <a href='www.linkedin.com/in/kausik-saha-fsd'><img src={linkedin} style={{width:"50px"}}></img></a> 
      <img src={facebook} style={{width:"50px"}}></img>
      </div>
    </div>
    </div>
  )
}

export default Contact
