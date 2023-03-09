import React, { memo } from 'react';
import './ProductColors.scss';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';

interface Props {
  color: string;
  productColor: string;
  handleProductChange: (newProductId: string) => void;
}

export const ProductColorsCircle: React.FC<Props> = memo(
  ({ color, productColor, handleProductChange }) => {
    const { productId } = useParams();
    let difColorProduct = '';

    if (productId) {
      difColorProduct = productId
        .split('-')
        .slice(0, -1)
        .concat(`${color}`)
        .join('-');
    }

    return (
      <Link
        to={`/product/${difColorProduct}`}
        aria-label={`click to choose ${color} color`}
        title={color}
        onClick={() => handleProductChange(difColorProduct)}
        className={cn('product-colors__circle', {
          'product-colors__circle--active': color === productColor,
        })}
      >
        <div
          className={`product-colors__color product-colors__color--${color}`}
        >
        </div>
      </Link>
    );
  },
);
