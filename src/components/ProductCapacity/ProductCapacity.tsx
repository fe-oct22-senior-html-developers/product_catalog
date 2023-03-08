import React, { memo } from 'react';
import './ProductCapacity.scss';
import { ProductCapacityOption } from './ProductCapacityOption';

export const ProductCapacity: React.FC = memo(() => (
  <div className="product-capacity">
    <div className="product-capacity__content">
      <p className="product-capacity__title">Select capacity</p>
      <div className="product-capacity__selector">
        <ProductCapacityOption isActive capacity="64GB" />
        <ProductCapacityOption capacity="256GB" />
        <ProductCapacityOption capacity="512GB" />
      </div>
    </div>
  </div>
));
