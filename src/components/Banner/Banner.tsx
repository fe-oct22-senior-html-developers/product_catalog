import React from 'react';
import { BannerSlider } from './BannerSlider';
import './Banner.scss';

// this import is temporary for testing img
import BannerImg from '../../static/Banner/banner.jpeg';

export const Banner: React.FC = () => {
  return (
    <section className="banner grid">
      <BannerSlider>
        <img className="banner__image" src={BannerImg} alt="BannerImg" />
        <img className="banner__image" src={BannerImg} alt="BannerImg" />
        <img className="banner__image" src={BannerImg} alt="BannerImg" />
      </BannerSlider>
    </section>
  );
};
