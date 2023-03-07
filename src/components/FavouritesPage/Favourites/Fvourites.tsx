import React, { useContext } from 'react';
import { GlobalContext } from '../../../contexts/GlobalProvider/GlobalProvider';
import { FavouritesItem } from '../FavouritesItem/FavouritesItem';
import { FavouritesList } from '../FavouritesList/FavouritesList';

export const Favourites: React.FC = () => {
  const { favourites } = useContext(GlobalContext);

  return (
    <section className="fvourites page__favourites container grid">
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
