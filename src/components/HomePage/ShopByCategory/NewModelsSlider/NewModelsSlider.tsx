import React from 'react';
import { CardItem } from '../../../CardItem/CardItem';

// this import is temporary for testing img
import PhonesImg from '../../../../static/phones/apple-iphone-11-pro-max/gold/00.jpg';

export const NewModelsSlider: React.FC = () => {
  return (
    <>
      <CardItem
        name="Apple iPhone 11 Pro Max 64GB Silver"
        price={1400}
        screen={"6.5' OLED"}
        capacity="64GB"
        ram="4GB"
        image={PhonesImg}
      />
    </>
  );
};
