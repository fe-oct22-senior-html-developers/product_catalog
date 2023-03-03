import React, { FC } from 'react';
import './CartTotal.scss';

interface Props {
  total: number;
  itemsNum: number;
}

export const CartTotal: FC<Props> = ({ total = 0, itemsNum = 0 }) => {
  return (
    <div className="cart-total grid__item—desktop_n-24">
      <div className="cart-total__price">{`$${total}`}</div>

      <div className="cart-total__items">{`Total for ${itemsNum} items`}</div>

      <button type="button" className="cart-total__btn">Checkout</button>
    </div>
  );
};
