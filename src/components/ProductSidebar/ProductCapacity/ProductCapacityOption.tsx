import React, { memo } from 'react';
import './ProductCapacity.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';

interface Props {
  capacity: string;
  productCapacity: string;
}

const changeCapacityToNumber = (capacity: string) => capacity.split('GB').join('');

export const ProductCapacityOption: React.FC<Props> = memo(
  ({ capacity, productCapacity }) => {
    const capacityNumber = changeCapacityToNumber(capacity);

    return (
      <Link
        to="/"
        className={cn('product-capacity__button', {
          'product-capacity__button--active': capacity === productCapacity,
        })}
      >
        {`${capacityNumber} GB`}
      </Link>
    );
  },
);
