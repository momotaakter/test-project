// src/components/Carousel.js

import React from "react";
import Slider from "react-slick";  // react-slick এর কম্পোনেন্ট
import './sliderimg/slider.css'
// Slick Carousel CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Header from "../header/Header";
import Productlist from "../productlist/Productlist";

const Carousel = () => {
  const settings = {
    dots: true, 
    infinite: true,  
    speed: 500,  
    slidesToShow: 3,  
    slidesToScroll: 2,  
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img
            src="./sliderimg/tshirt1.jpg"
            alt="Image 1"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="./sliderimg/tshirt2.jpg"
            alt="Image 2"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src='./sliderimg/tshirt3.jpg'
            alt="Image 3"
            className="carousel-image"
          />
        </div>

        <div>
          <img
            src='./sliderimg/tshirt4.jpg'
            alt="Image 3"
            className="carousel-image"
          />
        </div>
      </Slider>
      <div className="button-sectiona">
      <Productlist></Productlist>
      </div>
    
    </div>
  );
};

export default Carousel;
