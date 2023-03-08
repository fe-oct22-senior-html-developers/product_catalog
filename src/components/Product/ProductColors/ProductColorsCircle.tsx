import React, { memo } from 'react';
import './ProductColors.scss';
import cn from 'classnames';

const colors = {
  black: '#4C4C4C',
  gold: '#FCDBC1',
  midnightgreen: '#5F7170',
  silver: '#F0F0F0',
};

type Color = 'black' | 'gold' | 'midnightgreen' | 'silver';

interface Props {
  color: Color;
  isActive?: boolean;
}

export const ProductColorsCircle: React.FC<Props> = memo(
  ({ color, isActive }) => {
    const colorAvailable = colors[color];

    return (
      <div
        className={cn('product-colors__circle', {
          'product-colors__circle--active': isActive,
        })}
      >
        <div
          className="product-colors__color"
          style={{ backgroundColor: colorAvailable }}
        >
        </div>
      </div>
    );
  },
);
