import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './MyCertificates.css'
import csscertificate from '../../image/certificates/css certificate_page-0001.jpg'
import digitalmark from '../../image/certificates/digital marketing_page-0001.jpg'
import tcsion from '../../image/certificates/Kausik_Saha_3827560_page-0001.jpg'
import flstck from '../../image/certificates/FullStackCertificate_page-0001.jpg'
import postmancer from '../../image/certificates/PostMan_API_Fundamental_page-0001.jpg'
import gitcertificate from '../../image/certificates/Git and GitHub BootCamp_page-0001.jpg'



// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "red", fontSize:"100px" }}
//         onClick={onClick}
//       />
//     );
//   }

  
// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "green", fontSize:"100px"}}
//         onClick={onClick}
//       />
//     );
//   }
const MyCertificates = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 100,
        cssEase: "linear",
    //     nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
      };

  return (
    <div className="slider-container">
      <h2>Certificates</h2>
      <Slider {...settings} className='sldd'>
        <div>
          <img src={flstck} alt='img'></img>
        </div>
        <div>
        <img src={csscertificate} alt='img'></img>
        </div>
        <div>
        <img src={digitalmark} alt='img'></img>
        </div>
        <div>
        <img src={tcsion} alt='img'></img>
        </div>
        <div>
        <img src={postmancer} alt='img'></img>
        </div>
        <div>
        <img src={gitcertificate} alt='img'></img>
        </div>
      </Slider>
    </div>
  )
}

export default MyCertificates

