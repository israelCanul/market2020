import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Carousel } from "react-responsive-carousel";

export default function Slide({
  slides = [],
  width = null,
  showTumbs = false,
}) {
  let renderSlides = slides.map((slide, id) => {
    return (
      <div key={id}>
        <LazyLoadImage
          height="auto"
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
