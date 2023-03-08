import React, { useState, useEffect } from 'react';
import { getNewestPhones } from '../../../api/requests';
import { Phone } from '../../../types/Phone';
import { Card } from '../../Card';
import { SectionTitle } from '../../SectionTitle';
import { SmartphoneSlider } from '../../SmartphoneSlider';
import './BrandNewModels.scss';

export const BrandNewModels: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getNewestPhones()
      .then((res) => res.data)
      .then(setPhones)
      .catch((error) => window.console.log(error));
  }, []);

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
