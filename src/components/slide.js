import React from "react";
import { Carousel } from "react-responsive-carousel";



export default function Slide({
  slides = [],
  width = null,
  showTumbs = false,
}) {
  let renderSlides = slides.map((slide, id) => {
    return (
      <div key={id}>
        <img
          height="auto"
          loading="lazy"
          alt="slide"
          src={slide.img}
          srcSet={slide.srcSet ? slide.srcSet : ""}
        />
      </div>
    );
  });
  return (
    <Carousel
      showArrows={true}
      showIndicators={true}
      showStatus={false}
      showThumbs={showTumbs}
      interval={10000}
      autoPlay={true}
      infiniteLoop={true}
    >
      {renderSlides}
    </Carousel>
  );
}
