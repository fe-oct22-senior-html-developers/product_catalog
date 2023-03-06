import React from 'react';
import './CartItem.scss';
import { Link } from 'react-router-dom';

import Img from '../../../static/cart/phone.jpg';
import Close from '../../../static/cart/close.svg';
import Minus from '../../../static/cart/minus.svg';
import Plus from '../../../static/cart/plus.svg';
import { CartItem as CartItemType } from '../../../types/CartItem';

type Props = {
  cartItem: CartItemType;
};

export const CartItem: React.FC<Props> = ({ cartItem }) => {
  const { quantity, product } = cartItem;
  const { name, price } = product;

  // Тут напиши функції для видалення, зменшення/збільшення кількості

  return (
    <article className="cart-item">
      <div className="cart-item__container">
        <button
          type="button"
          className="cart-item__close-button"
          aria-label={`click to remove ${name} from cart`}
        >
          <img
            src={Close}
            alt={`click to remove ${name} from cart`}
            aria-hidden="true"
          />
        </button>

        <img src={Img} alt={name} className="cart-item__img" />

        <Link to="/product/:productId" className="cart-item__title">
          {`${name}`}
        </Link>
      </div>

      <div className="cart-item__container cart-item__container__bottom ">
        <div className="cart-item__counter">
          <button
            type="button"
            className="cart-item__counter-button-minus"
            aria-label="decrease quantity by 1"
          >
            <img src={Minus} alt="decrease quantity by 1" aria-hidden="true" />
          </button>

          <p className="cart-item__counter-number">{quantity}</p>

          <button
            type="button"
            className="cart-item__counter-button-plus"
            aria-label="increase quantity by 1"
          >
            <img src={Plus} alt="increase quantity by 1" aria-hidden="true" />
          </button>
        </div>

        <p className="cart-item__price">{`$${price}`}</p>
      </div>
    </article>
  );
};
