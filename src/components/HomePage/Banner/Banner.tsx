import React from 'react';
import { BannerSlider } from './BannerSlider';
import './Banner.scss';

// this import is temporary for testing img
import BannerImg from '../../../static/banner.jpeg';
import { PageTitle } from '../../PageTitle';

export const Banner: React.FC = () => {
  return (
    <div className="banner grid">
      <PageTitle mixClass="banner__title grid__item grid__item--tablet_1-11 grid__item--desktop_1-24">
        Welcome to Nice Gadgets store!
      </PageTitle>
      <BannerSlider>
        <img className="banner__image" src={BannerImg} alt="BannerImg" />
        <img className="banner__image" src={BannerImg} alt="BannerImg" />
        <img className="banner__image" src={BannerImg} alt="BannerImg" />
      </BannerSlider>
    </div>
  );
};
