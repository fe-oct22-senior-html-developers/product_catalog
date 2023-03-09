import React, { memo } from 'react';
import { PhoneDetails } from '../../../types/PhoneDetails';
import './ProductColors.scss';
import { ProductColorsCircle } from './ProductColorsCircle';

interface Props {
  colorsAvailable: string[];
  currentColor: string;
  setProduct: React.Dispatch<React.SetStateAction<PhoneDetails | undefined>>;
  handleProductChange: (newProductId: string) => void;
}

export const ProductColors: React.FC<Props> = memo(
  ({
    colorsAvailable, currentColor, setProduct, handleProductChange,
  }) => {
    return (
      <div className="product-colors product-sidebar__product-colors">
        <div className="product-colors__text">
          <p className="product-colors__title">Available colors</p>
          <p className="product-colors__id">ID: 802390</p>
        </div>
        <div className="product-colors__info">
          {colorsAvailable.map((color) => (
            <ProductColorsCircle
              productColor={currentColor}
              color={color}
              setProduct={setProduct}
              handleProductChange={handleProductChange}
              key={color}
            />
          ))}
          {/* <ProductColorsCircle color="black" isActive />
        <ProductColorsCircle color="gold" />
        <ProductColorsCircle color="midnightgreen" />
        <ProductColorsCircle color="silver" /> */}
        </div>
      </div>
    );
  },
);
