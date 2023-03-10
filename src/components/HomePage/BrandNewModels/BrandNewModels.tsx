import React, { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
import { getNewestPhones } from '../../../api/requests';
import { Phone } from '../../../types/Phone';
import { Card } from '../../Card';
import { SectionTitle } from '../../SectionTitle';
import { SmartphoneSlider } from '../../SmartphoneSlider';
import './BrandNewModels.scss';

export const BrandNewModels: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getNewestPhones()
      .then((res) => res.data)
      .then((data) => {
        setPhones(data);
        setIsLoading(false);
      })
      .catch((error) => {
        window.console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="brand-new-models container">
      <SectionTitle>Brand new models</SectionTitle>
      <Loader active={isLoading} inline="centered" />
      <SmartphoneSlider>
        {phones.map((phone) => (
          <Card mixClass="card--slider" key={phone.id} phone={phone} />
        ))}
      </SmartphoneSlider>
    </section>
  );
};
