import React, { memo } from 'react';
import { Phone } from '../../types/Phone';
import { ProductCapacity } from './ProductCapacity';
import { ProductColors } from './ProductColors';
import { ProductPurchase } from './ProductPurchase';
import './ProductSidebar.scss';

type PhoneExtended = {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
};

interface Props {
  phoneExtended: PhoneExtended;
  phone: Phone;
}

export const ProductSidebar: React.FC<Props> = memo(
  ({ phoneExtended, phone }) => {
    const {
      screen,
      resolution,
      processor,
      ram,
      color,
      colorsAvailable,
      capacity,
      capacityAvailable,
    } = phoneExtended;

    return (
      <div className="product-sidebar page__product-sidebar">
        <ProductColors colorsAvailable={colorsAvailable} currentColor={color} />
        <ProductCapacity
          capacityAvailable={capacityAvailable}
          currentCapacity={capacity}
        />
        <ProductPurchase phone={phone} />

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
    );
  },
);
