import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';

import Slider from 'react-slick';
import './NewModelsSlider.scss';

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

export const NewModelsSlider: React.FC<SliderCustomProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = React.Children.count(children);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: (
      <SampleNextArrow
        isDisabled={currentSlide === totalSlides - 4}
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <Slider {...settings} className="new-models-slider">
      {children}
    </Slider>
  );
};

SamplePrevArrow.defaultProps = {
  onClick: () => {},
};

SampleNextArrow.defaultProps = {
  onClick: () => {},
};
