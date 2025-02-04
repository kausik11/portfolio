import React from 'react'
import './MyExperties.css'
// import backdrop from '../../image/backdrop.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import csss from '../../image/experties/design/css.jpg'
import muii from '../../image/experties/design/mui.png'
import htmll from '../../image/experties/design/png-transparent-logo-html-html5.png'
import bootstrap from '../../image/experties/design/react_bootstrap.png'
import tailwindd from '../../image/experties/design/tailwind.png'
import sass from '../../image/experties/design/sass.png'
import jqurey from '../../image/experties/code/jquery.png'
import js from '../../image/experties/code/js.png'
import next from '../../image/experties/code/next.png'
import node from '../../image/experties/code/node.png'
import react from '../../image/experties/code/react.png'
import expreess from '../../image/experties/code/express.png'
import rest from '../../image/experties/code/rest_api.png'
import github from '../../image/experties/tools/github.png'
import dev from '../../image/experties/tools/Top-5-React-Developer-Tools-in-2021.png'
import vercel from '../../image/experties/tools/vercel.png'



const MyExperties = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 100,
    cssEase: "linear",
    
  };

  return (
    <div className='myexperties'>
      <div className='mybackdrop'>
      </div>
      <div className='expertinfo'>
      <h1>My Experties</h1>
      <p className='expinfo'> As a Frontend Developer with experience in the MERN stack, I specialize in building dynamic, responsive, and user-friendly web applications. I have a strong command of HTML, CSS, JavaScript, and React.js, along with modern styling frameworks like Tailwind CSS, Bootstrap, and Material UI to create visually appealing interfaces. </p>
      <div className='expertisediv'>
      <div className='Design'>
        <h2>Design</h2>
        <Slider {...settings} className='sld'>
          <div>
            <img alt='' src={csss} style={{width:"100px",height:"100px"}}></img>
          </div>
          <div>
            <img alt='' src={muii} style={{width:"100px",height:"100px"}}></img>
          </div>
          <div>
            <img alt='' src={htmll} style={{width:"100px",height:"100px"}}></img>
          </div>
          <div>
            <img alt='' src={bootstrap} style={{width:"100px",height:"100px"}}></img>
          </div>
          <div>
            <img alt='' src={tailwindd} style={{width:"100px",height:"100px"}}></img>
          </div>
        </Slider>
        <p>creating visually appealing, user-friendly, and responsive interfaces that enhance user experience. It combines aesthetics with functionality, ensuring that web applications are both beautiful and intuitive.</p>
      </div>

      <div className='Code'>
        <h2>Code</h2>
        <Slider {...settings} className='sld'>
          <div>
            <img alt='' src={expreess} style={{width:"100px",height:"100px"}}></img>
          </div>
          <div>
            <img alt='' src={jqurey} style={{width:"100px",height:"100px"}}></img>
          </div>
          <div>
            <img alt='' src={js} style={{width:"100px",height:"100px"}}></img>
          </div>
          <div>
            <img alt='' src={next} style={{width:"100px",height:"100px"}}></img>
          </div>
          <div>
            <img alt='' src={node} style={{width:"100px",height:"100px"}}></img>
          </div>
          <div>
            <img alt='' src={react} style={{width:"100px",height:"100px"}}></img>
          </div>
          <div>
            <img alt='' src={rest} style={{width:"100px",height:"100px"}}></img>
          </div>
        </Slider>
        <p>Frontend development relies heavily on JavaScript and its libraries/frameworks to build interactive and dynamic web applications. Here’s a breakdown of some key technologies and JS is the backbone of frontend development</p>
      </div>

      <div className='Tools'>
        <h2>Tools</h2>
        <Slider {...settings} className='sld'>
          <div>
            <img alt='' src={github} style={{width:"100px",height:"100px"}}></img>
          </div>
          <div>
            <img alt='' src={muii} style={{width:"100px",height:"100px"}}></img>
          </div>
          <div>
            <img alt='' src={dev} style={{width:"100px",height:"100px"}}></img>
          </div>
          <div>
            <img alt='' src={bootstrap} style={{width:"100px",height:"100px"}}></img>
          </div>
          <div>
            <img alt='' src={vercel} style={{width:"100px",height:"100px"}}></img>
          </div>
        </Slider>
        <p>In frontend development, Git and GitHub play a crucial role in managing code, tracking changes. These tools help ensure that multiple team members can work on a project efficiently.</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default MyExperties
