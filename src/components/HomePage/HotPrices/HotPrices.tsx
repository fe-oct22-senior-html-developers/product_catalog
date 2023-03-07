import React from 'react';
import { SectionTitle } from '../../SectionTitle';
import { Card } from '../../Card';
import { SmartphoneSlider } from '../../SmartphoneSlider';
import './HotPrices.scss';
import phones from '../../API.json';

export const HotPrices: React.FC = () => {
  return (
    <section className="hot-prices container">
      <SectionTitle>Hot prices</SectionTitle>
      <SmartphoneSlider>
        {phones.map((phone) => (
          <Card mixClass="card--slider" key={phone.id} phone={phone} />
        ))}
      </SmartphoneSlider>
    </section>
  );
};
