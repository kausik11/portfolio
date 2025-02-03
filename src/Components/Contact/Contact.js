import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
     <div className='conatactcontainer'>
    <h2>Contact Me</h2>
    <div className='contactimg'>
      <img src='https://www.birlatrimaya.ind.in/wp-content/uploads/2023/07/Birla-Trimaya-Location.png'></img>
    </div>

    <div className='contactinfo'>
    <div>
        <h3>Address</h3>
        <button>Visit on Google Map</button>
      </div>
      <div className='contactlogo'>
      <img src='https://pngimg.com/d/github_PNG40.png' style={{width:"50px"}}></img>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png' style={{width:"50px"}}></img>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/768px-2023_Facebook_icon.svg.png' style={{width:"50px"}}></img>
      <img src='https://w7.pngwing.com/pngs/799/918/png-transparent-mail-google-gmail-google-s-logo-icon-thumbnail.png' style={{width:"50px"}}></img>
      </div>
    </div>
    </div>
  )
}

export default Contact
