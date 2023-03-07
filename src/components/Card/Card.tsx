// import { async } from 'q';
import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../contexts/GlobalProvider/GlobalProvider';
import { Phone } from '../../types/Phone';
import './Card.scss';

type Props = {
  phone: Phone;
};

export const Card: React.FC<Props> = ({ phone }) => {
  const {
    image, name, price, screen, capacity, ram,
  } = phone;

  const { favourites, updateFavourites } = useContext(GlobalContext);
  const [isFavourite, setIsFavourite] = useState(false);

  const newFavourites = favourites;

  const isFavouritesIncludes = favourites.find(fav => fav.itemId === phone.itemId);

  useEffect(
    () => {
      if (isFavouritesIncludes) {
        setIsFavourite(true);
      }
    },
    [isFavourite],
  );

  const addToFavourites = () => {
    newFavourites.push(phone);

    updateFavourites(newFavourites);
    setIsFavourite(true);
  };

  const removeFromFavourites = () => {
    const filteredFavourites = newFavourites.filter(fav => fav.itemId !== phone.itemId);

    updateFavourites(filteredFavourites);
    setIsFavourite(false);
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
        <button type="button" className="card__button">
          Add to cart
        </button>
        {!isFavourite
          ? (
            <button type="button" onClick={() => addToFavourites()}>
              <div className="card__footer--favorites">123</div>
            </button>
          ) : (
            <button type="button" onClick={() => removeFromFavourites()}>
              <div className="card__footer--favorites"></div>
            </button>
          )}
      </div>
    </article>
  );
};
