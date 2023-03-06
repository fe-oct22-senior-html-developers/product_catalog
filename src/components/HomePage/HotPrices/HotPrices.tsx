import React from 'react';
import { SmartphoneSlider } from '../../SmartphoneSlider';

// this import is temporary for testing img
import PhonesImg from '../../../static/phones/apple-iphone-11-pro-max/gold/00.jpg';
import { CardItem } from '../../CardItem/CardItem';
import { PageTitle } from '../../PageTitle';
import './HotPrices.scss';

export const HotPrices = () => {
  return (
    <section className="hot-prices container">
      <PageTitle mixClass="hot-prices__title">Hot prices</PageTitle>
      <SmartphoneSlider>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => (
          <CardItem
            key={card}
            name="Apple iPhone 11 Pro Max 64GB Silver"
            price={1400}
            screen={"6.5' OLED"}
            capacity="64GB"
            ram="4GB"
            image={PhonesImg}
          />
        ))}
      </SmartphoneSlider>
    </section>
  );
};
