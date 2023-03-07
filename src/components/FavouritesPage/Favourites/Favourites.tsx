import React, { useContext } from 'react';
import { GlobalContext } from '../../../contexts/GlobalProvider/GlobalProvider';
import { FavouritesItem } from '../FavouritesItem/FavouritesItem';
import { FavouritesList } from '../FavouritesList';
import './Favourites.scss';

export const Favourites: React.FC = () => {
  const { favourites, favouritesLength } = useContext(GlobalContext);

  return (
    <section className="favourites">
      <div className="favourites__amount">
        {`${favouritesLength} items`}
      </div>
      <FavouritesList>
        {favourites.map((favouritesItem) => (
          <li className="favourites__list-item" key={favouritesItem.itemId}>
            <FavouritesItem favouritesItem={favouritesItem} />
          </li>
        ))}
      </FavouritesList>
    </section>
  );
};
