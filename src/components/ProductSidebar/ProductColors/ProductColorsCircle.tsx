import React, { memo } from 'react';
import './ProductColors.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';

// const colors = {
//   black: '#4C4C4C',
//   gold: '#FCDBC1',
//   midnightgreen: '#5F7170',
//   silver: '#F0F0F0',
// };

// type Color = 'black' | 'gold' | 'midnightgreen' | 'silver';

interface Props {
  color: string,
  productColor: string,
}

export const ProductColorsCircle: React.FC<Props> = memo(
  ({ color, productColor }) => {
    return (
      <Link to="/">
        <div
          className={cn('product-colors__circle', {
            'product-colors__circle--active': color === productColor,
          })}
        >
          <div
            className={`product-colors__color product-colors__color--${color}`}
            // style={{ backgroundColor: colorAvailable }}
          >
          </div>
        </div>
      </Link>
    );
  },
);
