import React, { FC } from 'react';
import './CartTotal.scss';

interface Props {
  total: number;
  itemsNum: number;
}

export const CartTotal: FC<Props> = ({ total = 0, itemsNum = 0 }) => {
  return (
    <div className="
      cart-total
      grid__item--tablet_1-12
      grid__item--desktop_17-24"
    >
      <div className="cart-total__price">{`$${total}`}</div>

      <div className="cart-total__items">{`Total for ${itemsNum} items`}</div>

      <button
        type="button"
        className="cart-total__btn"
        aria-label="Checkout button"
      >
        Checkout
      </button>
    </div>
  );
};
