import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../../contexts/GlobalProvider/GlobalProvider';
import { ModalWindow } from '../../ModalWindow';
import './CartTotal.scss';

interface Props {
  total: number;
  itemsNum: number;
}

export const CartTotal: React.FC<Props> = ({ total = 0, itemsNum = 0 }) => {
  const { updateCart } = useContext(GlobalContext);

  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleCheckoutClick = () => {
    setIsModalOpened(true);

    setTimeout(() => {
      setIsModalOpened(false);
      updateCart([]);
      window.location.replace('https://fe-oct22-senior-html-developers.github.io/product_catalog/');
    }, 2000);
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
        onClick={() => handleCheckoutClick()}
      >
        Checkout
      </button>

      {isModalOpened && (
        <ModalWindow />
      )}
    </div>
  );
};
