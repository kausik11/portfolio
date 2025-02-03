import React from 'react'
import './MyProjects.css'

const MyProjects = () => {
  return (
    <div className='projectcontainer'>
      <h1>Featured Projects</h1>
      <div className='firstprj'>
        <div className='prjinfo'>
        <h3>Project Title</h3>
        <ul>
            <li>Featured Skills</li>
            <li>Featured Skills</li>
            <li>Featured Skills</li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button>Check It Out</button>
        </div>
       <img src='https://kidlingoo.com/wp-content/uploads/flowers_name_in_english.jpg'></img>
      </div>
      


      <div className='secondprj'>
      <img src='https://kidlingoo.com/wp-content/uploads/flowers_name_in_english.jpg'></img>
        <div className='prjinfo'>
        <h3>Project Title</h3>
        <ul>
            <li>Featured Skills</li>
            <li>Featured Skills</li>
            <li>Featured Skills</li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button>Check It Out</button>
        </div>
       
      </div>
    </div>
  )
}

export default MyProjects
