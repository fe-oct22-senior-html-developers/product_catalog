import React from 'react';
import Slider from 'react-slick';

import './ProductSlider.scss';

type Props = {
  images: string[];
  name: string;
};

export const ProductSlider: React.FC<Props> = ({ images, name }) => {
  const baseUrl = images[0].split('/');

  baseUrl.pop();

  const imgUrl = baseUrl.join('/');

  const settings = {
    customPaging(i: number) {
      return (
        <div className="product-slider__dots-block">
          <img
            className="product-slider__dots-img"
            src={`${imgUrl}/0${i}.jpg`}
            alt="phone"
          />
        </div>
      );
    },
    dots: true,
    dotsClass: 'slick-dots1 slick-thumb1',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div
      className="
        page__product-slider
        grid__item--tablet_1-7
        grid__item--desktop_1-12
      "
    >
      <div
        className="product-slider">
        <Slider {...settings} className="product-slider__item">
          {images.map((image: string) => (
            <div key={image} className="product-slider__wrapper">
              <img className="product-slider__img" src={image} alt={name} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
