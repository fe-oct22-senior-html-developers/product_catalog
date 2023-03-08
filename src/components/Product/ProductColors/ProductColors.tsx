import React, { memo } from 'react';
import './ProductColors.scss';
import { ProductColorsCircle } from './ProductColorsCircle';

export const ProductColors: React.FC = memo(() => {
  return (
    <div className="product-colors">
      <div className="product-colors__text">
        <p className="product-colors__title">Available colors</p>
        <p className="product-colors__id">ID: 802390</p>
      </div>
      <div className="product-colors__info">
        {/* основний колір передається першим */}
        <ProductColorsCircle color="black" isActive />
        {/* можна зібрати всі можливі кольори в масив і передати їх через map */}
        <ProductColorsCircle color="gold" />
        <ProductColorsCircle color="midnightgreen" />
        <ProductColorsCircle color="silver" />
      </div>
    </div>
  );
});
