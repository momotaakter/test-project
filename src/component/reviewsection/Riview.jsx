import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerReviewGrid = () => {
  const images = [
    './img/review1.png',
    './img/review2.png',
    './img/review1.png',
    './img/review2.png',
    './img/review3.png',
    './img/review2.png',
    './img/review1.png',
    './img/review2.png',
    './img/review3.png',
    './img/review2.png',
    './img/review3.png',
    './img/review2.png'
    



    
  ];

  const settings = {
    dots: false, // ডটস লুকানো
    arrows: false, // অ্যারো লুকানো
    infinite:true, 
    speed: 500,
    slidesToShow: 1, // প্রতি পৃষ্ঠায় ১টি গ্রিড দেখাবে
    slidesToScroll: 2, // একবারে ১টি গ্রিড স্ক্রোল করবে
  };

  // ইমেজগুলো ২ কলাম এবং ২ রো তে ভাগ করা
  const chunkImages = (arr, size) =>
    arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);

  const gridImages = chunkImages(images, 6); // প্রতি পৃষ্ঠায় ৬টি ইমেজ

  return (
    <div style={{ width: "80%", margin: "0 auto", padding: "20px" }}>
   <p>সম্মানিত কাষ্টমারদের রিভিউ সমূহ</p>
      <Slider {...settings}>
        {gridImages.map((group, index) => (
          <div key={index}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }}
            >
              {group.map((img, i) => (
                <div
                  key={i}
                  style={{
                    padding: "10px",
                   
                    textAlign: "center",
                  }}
                >
                  <img
                    src={img}
                    alt={`Review ${i + 1}`}
                    style={{
                      width: "100%",
                      height: "300px",
                      padding:'10px'
                     
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerReviewGrid;
