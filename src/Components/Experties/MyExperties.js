import React from 'react'
import './MyExperties.css'
import backdrop from '../../image/backdrop.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import csss from '../../image/experties/design/css.jpg'
import muii from '../../image/experties/design/mui.png'
import htmll from '../../image/experties/design/png-transparent-logo-html-html5.png'
import bootstrap from '../../image/experties/design/react_bootstrap.png'
import tailwindd from '../../image/experties/design/tailwind.png'

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
      <p> Bicycle rights irony actually neutra typewriter lyft. Man bun taxidermy put a bird on it, umami yr ramps pop-up ugh bushwick chia lo-fi. Occupy bitters pour-over snackwave you probably haven't heard of them small batch. Cornhole mustache man bun letterpress echo park VHS.</p>
      <div className='expertisediv'>
      <div className='Design'>
        <h2>Design</h2>
        <Slider {...settings}>
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
        <p>Mumblecore hexagon kombucha, pitchfork four loko raclette intelligentsia master cleanse. Vinyl XOXO lumbersexual</p>
      </div>

      <div className='Code'>
        <h2>Code</h2>
        <Slider {...settings}>
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
        <p>Mumblecore hexagon kombucha, pitchfork four loko raclette intelligentsia master cleanse. Vinyl XOXO lumbersexual</p>
      </div>

      <div className='Tools'>
        <h2>Tools</h2>
        <Slider {...settings}>
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
        <p>Mumblecore hexagon kombucha, pitchfork four loko raclette intelligentsia master cleanse. Vinyl XOXO lumbersexual</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default MyExperties
