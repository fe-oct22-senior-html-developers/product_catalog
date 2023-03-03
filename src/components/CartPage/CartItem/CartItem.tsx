import React from 'react';
import './CartItem.scss';

import img from '../../../static/cart/phone.jpg';
import close from '../../../static/cart/close.svg';
import minus from '../../../static/cart/minus.svg';
import plus from '../../../static/cart/plus.svg';

import { Phone } from '../Cart/tempData/phone';

type Props = {
  phone: Phone;
};

export const CartItem: React.FC<Props> = ({ phone }) => {
  const { name, price } = phone;

  return (
    <article className="cart-item">
      {/* grid__item—desktop_1-n */}
      <div className="cart-item__container">
        <button type="button" className="cart-item__close-button">
          <img src={close} alt="x" />
        </button>

        <img src={img} alt={name} className="cart-item__img" />

        <a href="/" className="cart-item__title">
          {`${name}`}
        </a>
      </div>

      <div className="cart-item__container cart-item__container__bottom ">
        <div className="cart-item__counter">
          <button
            type="button"
            className="cart-item__counter-button-minus"
          >
            <img src={minus} alt="-" />
          </button>

          <p className="cart-item__counter-number">{1}</p>

          <button
            type="button"
            className="cart-item__counter-button-plus"
          >
            <img src={plus} alt="+" />
          </button>
        </div>

        <p className="cart-item__price">{`$${price}`}</p>
      </div>
    </article>
  );
};
