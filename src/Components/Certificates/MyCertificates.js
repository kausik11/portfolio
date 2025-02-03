import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


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
    <div className="slider-container" style={{marginBottom:"30px"}}>
      <h2>Certificates</h2>
      <Slider {...settings}>
        <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBwARZpC1OVgQCHh9JbNmL52o4rWFjVwlEw&s'></img>
        </div>
        <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBwARZpC1OVgQCHh9JbNmL52o4rWFjVwlEw&s'></img>
        </div>
        <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBwARZpC1OVgQCHh9JbNmL52o4rWFjVwlEw&s'></img>
        </div>
        <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBwARZpC1OVgQCHh9JbNmL52o4rWFjVwlEw&s'></img>
        </div>
        <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBwARZpC1OVgQCHh9JbNmL52o4rWFjVwlEw&s'></img>
        </div>
      </Slider>
    </div>
  )
}

export default MyCertificates

