import React, {
  memo,
  useContext,
  useState,
  useEffect,
} from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalProvider/GlobalProvider';
import { CartItem } from '../../types/CartItem';
import { Phone } from '../../types/Phone';
import './Card.scss';

type Props = {
  phone: Phone;
  mixClass: string;
  handleProductChange?: (newProductId: string) => void;
};

export const Card: React.FC<Props> = memo(
  ({ phone, mixClass, handleProductChange }) => {
    const {
      image,
      name,
      price,
      fullPrice,
      screen,
      capacity,
      ram,
      phoneId,
    } = phone;

    const {
      cart,
      updateCart,
      favourites,
      updateFavourites,
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
          {handleProductChange ? (
            <Link
              to={`/product/${phoneId}`}
              onClick={() => {
                setTimeout(
                  () => window.scrollTo({ top: 0, behavior: 'smooth' }),
                  200,
                );
                handleProductChange(phoneId);
              }}
            >
              <img className="card__img" src={image} alt={name} />
              <h4 className="card__title">{name}</h4>
            </Link>
          ) : (
            <Link to={`/product/${phoneId}`}>
              <img className="card__img" src={image} alt={name} />
              <h4 className="card__title">{name}</h4>
            </Link>
          )}
        </div>

        <div className="block">
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
              <button
                type="button"
                className="card__button"
                onClick={addToCart}
              >
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
        </div>
      </article>
    );
  },
);
