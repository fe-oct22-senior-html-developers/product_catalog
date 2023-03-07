import React from 'react';
import phones from '../../API.json';
import { Card } from '../../Card';
import { SectionTitle } from '../../SectionTitle';
import { SmartphoneSlider } from '../../SmartphoneSlider';
import './BrandNewModels.scss';

export const BrandNewModels: React.FC = () => {
  return (
    <section className="brand-new-models container">
      <SectionTitle>Brand new models</SectionTitle>
      <SmartphoneSlider>
        {phones.map((phone) => (
          <Card mixClass="card--slider" key={phone.id} phone={phone} />
        ))}
      </SmartphoneSlider>
    </section>
  );
};
