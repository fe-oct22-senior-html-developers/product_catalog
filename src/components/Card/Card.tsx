import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../contexts/GlobalProvider/GlobalProvider';
import { CartItem } from '../../types/CartItem';
import { Phone } from '../../types/Phone';
import './Card.scss';

type Props = {
  phone: Phone;
  mixClass: string;
};

export const Card: React.FC<Props> = ({ phone, mixClass }) => {
  // eslint-disable-next-line object-curly-newline
  const { image, name, price, fullPrice, screen, capacity, ram } = phone;

  const {
    cart, updateCart, favourites, updateFavourites,
  } = useContext(GlobalContext);

  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  const newCart = [...cart];
  const newFavourites = [...favourites];

  const isCartIncludes = cart.some(
    (item) => item.product.itemId === phone.itemId,
  );

  const isFavouritesIncludes = favourites.find(
    (fav) => fav.itemId === phone.itemId,
  );

  useEffect(() => {
    if (isCartIncludes) {
      setIsAddedToCart(true);
    }

    if (isFavouritesIncludes) {
      setIsFavourite(true);
    }
  }, [isAddedToCart, isFavourite]);

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

  const addToFavourites = () => {
    newFavourites.push(phone);

    updateFavourites(newFavourites);
    setIsFavourite(true);
  };

  const removeFromFavourites = () => {
    const filteredFavourites = newFavourites.filter(
      (fav) => fav.itemId !== phone.itemId,
    );

    updateFavourites(filteredFavourites);
    setIsFavourite(false);
  };

  return (
    <article className={`card ${mixClass}`}>
      <div>
        <img className="card__img" src={image} alt={name} />

        <h4 className="card__title">{name}</h4>
      </div>

      <div className="card__prices">
        <span className="card__prices--price">{`$${price}`}</span>
        <span className="card__prices--old-price">{`$${fullPrice}`}</span>
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

        {!isFavourite ? (
          <button
            type="button"
            onClick={() => addToFavourites()}
            className="card__fav-button"
          >
            <div className="card__fav-icon card__fav-icon--pasive"></div>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => removeFromFavourites()}
            className="card__fav-button"
          >
            <div className="card__fav-icon card__fav-icon--active"></div>
          </button>
        )}
      </div>
    </article>
  );
};
