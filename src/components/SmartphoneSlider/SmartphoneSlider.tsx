import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';

import Slider from 'react-slick';
import './SmartphoneSlider.scss';
import useMediaQuery from './useMediaQuery';

interface ArrowProps {
  onClick?: () => void;
  isDisabled: boolean;
}

interface SliderCustomProps {
  children: ReactNode;
}

function SamplePrevArrow(props: ArrowProps) {
  const { onClick, isDisabled } = props;
  const classes = classNames('arrow arrow-left', { disabled: isDisabled });

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div onClick={isDisabled ? undefined : onClick} className={classes}></div>
  );
}

function SampleNextArrow(props: ArrowProps) {
  const { onClick, isDisabled } = props;
  const classes = classNames('arrow arrow-right', { disabled: isDisabled });

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div onClick={isDisabled ? undefined : onClick} className={classes}></div>
  );
}

export const SmartphoneSlider: React.FC<SliderCustomProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = React.Children.count(children);

  const matches1 = useMediaQuery('(max-width: 1024px)'); // 3
  const matches2 = useMediaQuery('(max-width: 740px)'); // 2
  const matches3 = useMediaQuery('(max-width: 480px)'); // 1

  let cardsCountOnScreen = 0;

  if (matches3) {
    cardsCountOnScreen = 1.5;
  } else if (matches2) {
    cardsCountOnScreen = 2;
  } else if (matches1) {
    cardsCountOnScreen = 2.5;
  } else {
    cardsCountOnScreen = 4;
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: (
      <SampleNextArrow
        isDisabled={currentSlide === totalSlides - cardsCountOnScreen}
        onClick={() => setCurrentSlide(currentSlide + 1)}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        isDisabled={currentSlide === 0}
        onClick={() => setCurrentSlide(currentSlide - 1)}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <>
      <Slider {...settings} className="smartphone-slider">
        {children}
      </Slider>
    </>
  );
};

SamplePrevArrow.defaultProps = {
  onClick: () => {},
};

SampleNextArrow.defaultProps = {
  onClick: () => {},
};
