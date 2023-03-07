import React from 'react';
import { SectionTitle } from '../../SectionTitle';
import { Card } from '../../Card';
import { SmartphoneSlider } from '../../SmartphoneSlider';
import './HotPrices.scss';
import { phone } from '../../API';

export const HotPrices: React.FC = () => {
  return (
    <section className="hot-prices container">
      <SectionTitle>Hot prices</SectionTitle>
      <SmartphoneSlider>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => (
          <Card mixClass="card--slider" key={card} phone={phone} />
        ))}
      </SmartphoneSlider>
    </section>
  );
};
