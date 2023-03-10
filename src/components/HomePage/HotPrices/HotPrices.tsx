import React, { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
import { SectionTitle } from '../../SectionTitle';
import { Card } from '../../Card';
import { SmartphoneSlider } from '../../SmartphoneSlider';
import './HotPrices.scss';
import { getBiggestDiscounts } from '../../../api/requests';
import { Phone } from '../../../types/Phone';

export const HotPrices: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getBiggestDiscounts()
      .then((res) => res.data)
      .then((data) => {
        setPhones(data);
        setIsLoading(false);
      })
      .catch((error) => window.console.log(error));
  }, []);

  return (
    <section className="hot-prices container">
      <SectionTitle>Hot prices</SectionTitle>
      <Loader active={isLoading} inline="centered" />
      <SmartphoneSlider>
        {phones.map((phone) => (
          <Card mixClass="card--slider" key={phone.id} phone={phone} />
        ))}
      </SmartphoneSlider>
    </section>
  );
};
