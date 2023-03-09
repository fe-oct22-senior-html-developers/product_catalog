import React, { memo } from 'react';
import { Phone } from '../../types/Phone';
import { PhoneDetails } from '../../types/PhoneDetails';
import { ProductCapacity } from './ProductCapacity';
import { ProductColors } from './ProductColors';
import { ProductPurchase } from './ProductPurchase';
import './ProductSidebar.scss';

interface Props {
  productExtended: PhoneDetails;
  product: Phone;
  handleProductChange: (newProductId: string) => void;
}

export const ProductSidebar: React.FC<Props> = memo(
  ({ productExtended, product, handleProductChange }) => {
    const {
      screen,
      resolution,
      processor,
      ram,
      color,
      colorsAvailable,
      capacity,
      capacityAvailable,
    } = productExtended;

    return (
      <div
        className="
          product-sidebar
          page__product-sidebar
          grid__item--tablet_8-12
          grid__item--desktop_14-24
        "
      >
        <ProductColors
          colorsAvailable={colorsAvailable}
          currentColor={color}
          handleProductChange={handleProductChange}
        />
        <div className="product-sidebar__tech-info">
          <ProductCapacity
            capacityAvailable={capacityAvailable}
            currentCapacity={capacity}
            handleProductChange={handleProductChange}
          />
          <ProductPurchase phone={product} />

          <div className="product-sidebar__info">
            <div className="product-sidebar__characteristic">
              <p className="product-sidebar__property">Screen</p>
              <p className="product-sidebar__value">{screen}</p>
            </div>

            <div className="product-sidebar__characteristic">
              <p className="product-sidebar__property">Resolution</p>
              <p className="product-sidebar__value">{resolution}</p>
            </div>

            <div className="product-sidebar__characteristic">
              <p className="product-sidebar__property">Processor</p>
              <p className="product-sidebar__value">{processor}</p>
            </div>

            <div className="product-sidebar__characteristic">
              <p className="product-sidebar__property">RAM</p>
              <p className="product-sidebar__value">{ram}</p>
            </div>
          </div>
        </div>
      </div>
    );
  },
);
