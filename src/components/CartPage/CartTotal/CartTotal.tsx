import React, { useContext } from 'react';
import { GlobalContext } from '../../../contexts/GlobalProvider/GlobalProvider';
import './CartTotal.scss';

interface Props {
  total: number;
  itemsNum: number;
}

export const CartTotal: React.FC<Props> = ({ total = 0, itemsNum = 0 }) => {
  const { updateCart } = useContext(GlobalContext);

  const handleCheckout = () => {
    const confirmed = window.confirm(
      'Checkout is not implemented yet. Do you want to clear the Cart?',
    );

    if (confirmed) {
      updateCart([]);
    }
  };

  return (
    <div
      className="
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
        onClick={() => handleCheckout()}
      >
        Checkout
      </button>
    </div>
  );
};
