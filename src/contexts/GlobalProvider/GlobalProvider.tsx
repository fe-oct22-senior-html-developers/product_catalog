// eslint-disable-next-line object-curly-newline
import React, { ReactElement, useState, useMemo, useCallback } from 'react';
import { CartItem } from '../../types/CartItem';
import { Phone } from '../../types/Phone';

type Props = {
  children: ReactElement;
};

type GlobalContextType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  updateCart: (newCart: CartItem[]) => void;
  cartLength: number;
  favourites: Phone[];
  setFavourites: React.Dispatch<React.SetStateAction<Phone[]>>;
  updateFavourites: (newFavourites: Phone[]) => void;
  favouritesLength: number;
};

export const GlobalContext = React.createContext<GlobalContextType>({
  cart: [],
  setCart: () => {},
  updateCart: () => {},
  cartLength: 0,
  favourites: [],
  setFavourites: () => {},
  updateFavourites: () => {},
  favouritesLength: 0,
});

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem('cart') || '[]'),
  );

  const [favourites, setFavourites] = useState<Phone[]>(
    JSON.parse(localStorage.getItem('favourites') || '[]'),
  );

  const updateCart = useCallback((newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }, []);

  const updateFavourites = useCallback((newFavourites: Phone[]) => {
    setFavourites(newFavourites);
    localStorage.setItem('favourites', JSON.stringify(newFavourites));
  }, []);

  const cartLength = cart.length;
  const favouritesLength = favourites.length;

  const contextValue = useMemo(
    () => ({
      cart,
      setCart,
      updateCart,
      cartLength,
      favourites,
      setFavourites,
      updateFavourites,
      favouritesLength,
    }),
    [cart, favourites],
  );

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
