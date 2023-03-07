import React, { ReactNode } from 'react';
import Slider from 'react-slick';
import './BannerSlider.scss';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

interface SliderCustomProps {
  children: ReactNode;
}

export const BannerSlider: React.FC<SliderCustomProps> = ({ children }) => {
  const settings = {
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    draggable: true,
    autoplaySpeed: 3000,
    customPaging() {
      return (
        <div>
          <div style={{ visibility: 'hidden' }}>&bull;</div>
        </div>
      );
    },
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Slider
      {...settings}
      className="grid__item grid__item--tablet_2-11 grid__item--desktop_2-23"
    >
      {children}
    </Slider>
  );
};
