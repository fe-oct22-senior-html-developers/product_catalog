import React, { memo } from 'react';
import './ProductCapacity.scss';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';

interface Props {
  capacity: string;
  productCapacity: string;
  handleProductChange: (newProductId: string) => void;
}

const changeCapacityToNumber = (capacity: string) => capacity.split('GB').join('');

export const ProductCapacityOption: React.FC<Props> = memo(
  ({ capacity, productCapacity, handleProductChange }) => {
    const capacityNumber = changeCapacityToNumber(capacity);

    const { productId } = useParams();
    let difCapacityProduct = '';
    const lowCapacity = capacity.toLowerCase();

    if (productId) {
      const separated = productId.split('-');

      difCapacityProduct = separated
        .slice(0, -2)
        .concat([`${lowCapacity}`, separated[separated.length - 1]])
        .join('-');
    }

    return (
      <Link
        to={`/product/${difCapacityProduct}`}
        aria-label={`click to choose ${capacity} capacity`}
        onClick={() => handleProductChange(difCapacityProduct)}
        className={cn('product-capacity__button', {
          'product-capacity__button--active': capacity === productCapacity,
        })}
      >
        {`${capacityNumber} GB`}
      </Link>
    );
  },
);
