import React from 'react';
import { Phone } from '../../../types/Phone';
import { Card } from '../../Card';
import { SectionTitle } from '../../SectionTitle';
import { SmartphoneSlider } from '../../SmartphoneSlider';
import './ProductRecommendedSlider.scss';

type Props = {
  products: Phone[];
};

export const ProductRecommendedSlider: React.FC<Props> = ({ products }) => {
  return (
    <section className="product-recommended-slider">
      <SectionTitle>You may also like</SectionTitle>
      <SmartphoneSlider>
        {products.map((phone: Phone) => (
          <Card mixClass="card--slider" key={phone.id} phone={phone} />
        ))}
      </SmartphoneSlider>
    </section>
  );
};
