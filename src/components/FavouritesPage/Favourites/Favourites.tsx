import React, { useContext } from 'react';
import { GlobalContext } from '../../../contexts/GlobalProvider/GlobalProvider';
import { EmptyMessage } from '../../EmptyMessage';
import { FavouritesItem } from '../FavouritesItem';
import { FavouritesList } from '../FavouritesList';
import './Favourites.scss';
import EmptyFavouritesImage from '../../../static/favourites/empty-box.png';

export const Favourites: React.FC = () => {
  const { favourites, favouritesLength } = useContext(GlobalContext);

  return (
    <>
      {favouritesLength !== 0 ? (
        <section className="favourites">
          <div className="favourites__amount">{`${favouritesLength} items`}</div>
          <FavouritesList>
            {favourites.map((favouritesItem) => (
              <li className="favourites__list-item" key={favouritesItem.itemId}>
                <FavouritesItem favouritesItem={favouritesItem} />
              </li>
            ))}
          </FavouritesList>
        </section>
      ) : (
        <EmptyMessage
          mixClass="favourites__empty-message"
          image={EmptyFavouritesImage}
          btnText="Add"
        />
      )}
    </>
  );
};
