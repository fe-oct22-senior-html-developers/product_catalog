import React, { useState, useEffect } from 'react';
import { SectionTitle } from '../../SectionTitle';
import { Card } from '../../Card';
import { SmartphoneSlider } from '../../SmartphoneSlider';
import './HotPrices.scss';
import { getBiggestDiscounts } from '../../../api/requests';
import { Phone } from '../../../types/Phone';

export const HotPrices: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getBiggestDiscounts()
      .then((res) => res.data)
      .then(setPhones)
      .catch((error) => window.console.log(error));
  }, []);

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
