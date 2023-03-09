import React, { memo } from 'react';
import './ProductCapacity.scss';
import { ProductCapacityOption } from './ProductCapacityOption';

interface Props {
  currentCapacity: string;
  capacityAvailable: string[];
  handleProductChange: (newProductId: string) => void;
}

export const ProductCapacity: React.FC<Props> = memo(
  ({ currentCapacity, capacityAvailable, handleProductChange }) => (
    <div className="product-capacity product-sidebar__product-capacity">
      <div className="product-capacity__content">
        <p className="product-capacity__title">Select capacity</p>
        <div className="product-capacity__selector">
          {capacityAvailable.map((capacity) => (
            <ProductCapacityOption
              capacity={capacity}
              productCapacity={currentCapacity}
              key={capacity}
              handleProductChange={handleProductChange}
            />
          ))}
        </div>
      </div>
    </div>
  ),
);
