import React from 'react';
import { phone } from '../../API';
import { Card } from '../../Card';
import { SectionTitle } from '../../SectionTitle';
import { SmartphoneSlider } from '../../SmartphoneSlider';
import './BrandNewModels.scss';

export const BrandNewModels: React.FC = () => {
  return (
    <section className="brand-new-models container">
      <SectionTitle>Brand new models</SectionTitle>
      <SmartphoneSlider>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => (
          <Card mixClass="card--slider" key={card} phone={phone} />
        ))}
      </SmartphoneSlider>
    </section>
  );
};
