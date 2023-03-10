import React from 'react';
import { Phone } from '../../../types/Phone';
import { Card } from '../../Card';
import { SectionTitle } from '../../SectionTitle';
import { SmartphoneSlider } from '../../SmartphoneSlider';
import './ProductRecommendedSlider.scss';

type Props = {
  products: Phone[];
  handleProductChange: (newProductId: string) => void,
};

export const ProductRecommendedSlider: React.FC<Props> = ({ products, handleProductChange }) => {
  return (
    <section className="product-recommended-slider">
      <SectionTitle>You may also like</SectionTitle>
      <SmartphoneSlider>
        {products.map((phone: Phone) => (
          <Card
            mixClass="card--slider"
            key={phone.id}
            phone={phone}
            handleProductChange={handleProductChange}
          />
        ))}
      </SmartphoneSlider>
    </section>
  );
};
