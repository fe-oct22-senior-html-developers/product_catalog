import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../contexts/GlobalProvider/GlobalProvider';
import { CartItem } from '../../types/CartItem';
import { Phone } from '../../types/Phone';
import './Card.scss';

type Props = {
  phone: Phone;
};

export const Card: React.FC<Props> = ({ phone }) => {
  const {
    image, name, price, screen, capacity, ram,
  } = phone;

  const { cart, updateCart } = useContext(GlobalContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const newCart = cart;

  const isCartIncludes = cart.some(
    (item) => item.product.itemId === phone.itemId,
  );

  useEffect(() => {
    if (isCartIncludes) {
      setIsAddedToCart(true);
    }
  }, [isAddedToCart]);

  function generateCartId(elements: CartItem[]) {
    return elements.length > 0
      ? Math.max(...elements.map((element) => element.id)) + 1
      : 0;
  }

  const addToCart = () => {
    newCart.push({
      id: generateCartId(newCart),
      quantity: 1,
      product: phone,
    });

    updateCart(newCart);
    setIsAddedToCart(true);
  };

  const removeFromCart = () => {
    const filteredCart = newCart.filter(
      (item) => item.product.itemId !== phone.itemId,
    );

    updateCart(filteredCart);
    setIsAddedToCart(false);
  };

  return (
    <article className="card">
      <img className="card__img" src={image} alt={name} />

      <h4 className="card__title">{name}</h4>
      <div className="card__prices">
        <span className="card__prices--price">{`$${price}`}</span>
        <span className="card__prices--old-price">{`$${price}`}</span>
      </div>

      <div className="card__specifications">
        <div className="card__specifications--feature">
          <span>Screen</span>
          <span>Capacity</span>
          <span>RAM</span>
        </div>
        <div className="card__specifications--feature">
          <span>{screen}</span>
          <span>{capacity}</span>
          <span>{ram}</span>
        </div>
      </div>

      <div className="card__footer">
        {!isAddedToCart ? (
          <button type="button" className="card__button" onClick={addToCart}>
            Add to cart
          </button>
        ) : (
          <button
            type="button"
            className="card__button card__button--active"
            onClick={removeFromCart}
          >
            Added to cart
          </button>
        )}
        <div className="card__footer--favorites"></div>
      </div>
    </article>
  );
};
