import React from 'react';
import { CardItem } from '../../CardItem/CardItem';
import { PageTitle } from '../../PageTitle';
import { NewModelsSlider } from './NewModelsSlider';
import './BrandNewModels.scss';

// this import is temporary for testing img
import PhonesImg from '../../../static/phones/apple-iphone-11-pro-max/gold/00.jpg';

export const BrandNewModels = () => {
  return (
    <div className="brand-new-models">
      <div className="container">
        <PageTitle mixClass="brand-new-models__title">
          Brand new models
        </PageTitle>
        <NewModelsSlider>
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
        </NewModelsSlider>
      </div>
    </div>
  );
};
