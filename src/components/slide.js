import React from "react";
import { Carousel } from "react-responsive-carousel";
export default function Slide() {
  return (
    <div className="main_container">
      <Carousel
        showArrows={true}
        showIndicators={true}
        showStatus={false}
        showThumbs={false}
        interval={3000}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img
            width="100%"
            height="auto"
            alt="slide"
            src="img/home/slide_home_500_x_133.jpg"
            srcSet="img/home/slide_home_500_x_133.jpg 767w,img/home/slide_home_768_x_205.jpg 1200w,img/home/slide_home.jpg 1900w"
          />
        </div>
        <div>
          <img
            width="100%"
            height="auto"
            alt="slide"
            src="img/home/slide_home_500_x_133.jpg"
            srcSet="img/home/slide_home_500_x_133.jpg 767w,img/home/slide_home_768_x_205.jpg 1200w,img/home/slide_home.jpg 1900w"
          />
        </div>
      </Carousel>
    </div>
  );
}
