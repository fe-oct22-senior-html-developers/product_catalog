/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext, useEffect, useState } from 'react';
import './CartItem.scss';
import { Link } from 'react-router-dom';

// import Img from '../../../static/cart/phone.jpg';
import { CartItem as CartItemType } from '../../../types/CartItem';
import { GlobalContext } from '../../../contexts/GlobalProvider/GlobalProvider';

type Props = {
  cartItem: CartItemType;
};

export const CartItem: React.FC<Props> = ({ cartItem }) => {
  const { quantity, product } = cartItem;
  // eslint-disable-next-line object-curly-newline
  const { id, name, price, image } = product;
  const { cart, updateCart } = useContext(GlobalContext);

  const [isDisabled, setIsDisabled] = useState(false);
  const [isLimit, setIsLimit] = useState(false);

  useEffect(() => {
    if (quantity === 1) {
      setIsDisabled(true);
    }

    if (quantity > 1) {
      setIsDisabled(false);
    }
  }, [quantity]);

  useEffect(() => {
    if (quantity === 10) {
      setIsLimit(true);
    }

    if (quantity < 10) {
      setIsLimit(false);
    }
  }, [quantity]);

  const addOneItemToLocalStorage = () => {
    const updatedCart = cart.map((item) => {
      if (item.product.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    updateCart(updatedCart);
  };

  const removeOneItemFromLocalStorage = () => {
    const updatedCart = cart.map((item) => {
      if (item.product.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    });

    updateCart(updatedCart);
  };

  const removeCompletelyItemFromLocalStorage = () => {
    const updatedCart = cart.filter((item) => item.product.id !== id);

    updateCart(updatedCart);
  };

  return (
    <article className="cart-item">
      <div className="cart-item__container">
        <button
          type="button"
          className="cart-item__close-button"
          aria-label={`click to remove ${name} from cart`}
          onClick={() => removeCompletelyItemFromLocalStorage()}
        ></button>

        <img src={image} alt={name} className="cart-item__img" />

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
            onClick={() => removeOneItemFromLocalStorage()}
            disabled={isDisabled}
          ></button>

          <p className="cart-item__counter-number">{quantity}</p>

          <button
            type="button"
            className="cart-item__counter-button-plus"
            aria-label="increase quantity by 1"
            onClick={() => addOneItemToLocalStorage()}
            disabled={isLimit}
          ></button>
        </div>

        <p className="cart-item__price">{`$${quantity * price}`}</p>
      </div>
    </article>
  );
};
