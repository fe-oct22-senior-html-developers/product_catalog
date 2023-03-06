import React from 'react';
import './CartItem.scss';
import { Link } from 'react-router-dom';

import Img from '../../../static/cart/phone.jpg';
import Close from '../../../static/cart/close.svg';
import Minus from '../../../static/cart/minus.svg';
import Plus from '../../../static/cart/plus.svg';

import { Phone } from '../Cart/tempData/phone';

type Props = {
  phone: Phone;
};

export const CartItem: React.FC<Props> = ({ phone }) => {
  const { name, price } = phone;

  return (
    <article className="cart-item">
      <div className="cart-item__container">
        <button type="button" className="cart-item__close-button">
          <img src={Close} alt={`click to remove ${name} from cart`} />
        </button>

        <img src={Img} alt={name} className="cart-item__img" />

        <Link to="/product/:productId" className="cart-item__title">
          {`${name}`}
        </Link>
      </div>

      <div className="cart-item__container cart-item__container__bottom ">
        <div className="cart-item__counter">
          <button type="button" className="cart-item__counter-button-minus">
            <img src={Minus} alt="decrease quantity by 1" />
          </button>

          <p className="cart-item__counter-number">{1}</p>

          <button type="button" className="cart-item__counter-button-plus">
            <img src={Plus} alt="increase quantity by 1" />
          </button>
        </div>

        <p className="cart-item__price">{`$${price}`}</p>
      </div>
    </article>
  );
};
