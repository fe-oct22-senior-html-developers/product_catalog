import React, {
  useContext, useState, useEffect, memo,
} from 'react';
import { GlobalContext } from '../../../contexts/GlobalProvider/GlobalProvider';
import { CartItem } from '../../../types/CartItem';
import { Phone } from '../../../types/Phone';
import { PhoneDetails } from '../../../types/PhoneDetails';
import './ProductPurchase.scss';

type Props = {
  phone: Phone;
  phoneDetails: PhoneDetails;
};

export const ProductPurchase: React.FC<Props> = memo(
  ({ phone, phoneDetails }) => {
    // eslint-disable-next-line object-curly-newline
    const { fullPrice } = phone;

    const {
      cart, updateCart, favourites, updateFavourites,
    }
      = useContext(GlobalContext);

    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [isFavourite, setIsFavourite] = useState(false);

    const newCart = [...cart];
    const newFavourites = [...favourites];

    const isCartIncludes = newCart.some(
      (item) => item.product.itemId === phone.itemId,
    );

    const isFavouritesIncludes = newFavourites.find(
      (fav) => fav.itemId === phone.itemId,
    );

    useEffect(() => {
      if (isCartIncludes) {
        setIsAddedToCart(true);
      }

      if (isFavouritesIncludes) {
        setIsFavourite(true);
      }
    }, [isAddedToCart, isFavourite, phone]);

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
      <article className="product-purchase product-sidebar__product-purchase">
        <div className="product-purchase__prices">
          <p className="product-purchase__prices--price">{`$${phoneDetails?.priceDiscount}`}</p>
          <p className="product-purchase__prices--old-price">{`$${fullPrice}`}</p>
        </div>

        <div className="product-purchase__footer">
          {!isAddedToCart ? (
            <button
              type="button"
              className="product-purchase__button"
              onClick={addToCart}
            >
              Add to cart
            </button>
          ) : (
            <button
              type="button"
              className="product-purchase__button product-purchase__button--active"
              onClick={removeFromCart}
            >
              Added to cart
            </button>
          )}

          {!isFavourite ? (
            <button
              type="button"
              onClick={() => addToFavourites()}
              className="product-purchase__fav-button"
            >
              <div className="product-purchase__fav-icon product-purchase__fav-icon--pasive"></div>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => removeFromFavourites()}
              className="product-purchase__fav-button"
            >
              <div className="product-purchase__fav-icon product-purchase__fav-icon--active"></div>
            </button>
          )}
        </div>
      </article>
    );
  },
);
