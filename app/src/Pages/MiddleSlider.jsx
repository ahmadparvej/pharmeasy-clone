import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const MiddleSlider = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default MiddleSlider
import  { Component } from "react";
import Slider from "react-slick";
import Styles from "./MiddleSlider.module.css"


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
  export default class CustomArrows extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      return (
        <div  style={{width:"80%", marginLeft:"150px"}}>
    
          <Slider {...settings}>
            <div className={Styles.smallBox}>
                <img src='https://cms-contents.pharmeasy.in/carousel_item/7e5e174fdfb-OneTouchWeb.jpg?dim=146x0&dpr=1.25&q=100' alt='pic'/>
              
            </div>
            <div>
                <img src="https://cms-contents.pharmeasy.in/carousel_item/7fdd90400a1-Featured-banner-Hansaplast-web.png?dim=146x0&dpr=1.25&q=100" alt="pic"/>
        
            </div>
            <div>
            <img src="https://cms-contents.pharmeasy.in/carousel_item/bf633425db6-web_johnson.jpg?dim=146x0&dpr=1.25&q=100" alt="pic"/>
        
            </div>
            <div>
            <img src="https://cms-contents.pharmeasy.in/carousel_item/6beabc4b6ed-web_Accusure.jpg?dim=146x0&dpr=1.25&q=100" alt="pic"/>
    
            </div>
            <div>
            <img src="https://cms-contents.pharmeasy.in/carousel_item/f8493a13be2-web_Pigeon.jpg?dim=146x0&dpr=1.25&q=100" alt="pic"/>
              
            </div>
            <div>
            <img src="https://cms-contents.pharmeasy.in/carousel_item/db82ec1a424-web_Curatio.jpg?dim=146x0&dpr=1.25&q=100" alt="pic"/>
        
            </div>
            <div>
                <img src="https://cms-contents.pharmeasy.in/carousel_item/c72feb4bd7a-web_Huggies.jpg?dim=146x0&dpr=1.25&q=100" alt="pic"/>
            </div>
          </Slider>
        </div>
      );
    }
  }
