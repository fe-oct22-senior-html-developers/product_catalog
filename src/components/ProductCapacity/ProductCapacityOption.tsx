import React, { memo } from 'react';
import './ProductCapacity.scss';
import cn from 'classnames';

interface Props {
  capacity: Capacity;
  isActive?: boolean;
}

const changeCapacityToNumber = (capacity: Capacity) => capacity.split('GB').join('');

type Capacity = '32GB' | '64GB' | '128GB' | '256GB' | '512GB';

export const ProductCapacityOption: React.FC<Props> = memo(
  ({ capacity, isActive }) => {
    const capacityNumber = changeCapacityToNumber(capacity);

    return (
      <button
        type="button"
        className={cn('product-capacity__button', {
          'product-capacity__button--active': isActive,
        })}
      >
        {`${capacityNumber} GB`}
      </button>
    );
  },
);
