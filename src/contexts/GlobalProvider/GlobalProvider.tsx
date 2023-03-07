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
  favourites: Phone[];
  setFavourites: React.Dispatch<React.SetStateAction<Phone[]>>;
  updateFavourites: (newFavourites: Phone[]) => void;
};

export const GlobalContext = React.createContext<GlobalContextType>({
  cart: [],
  setCart: () => {},
  updateCart: () => {},
  favourites: [],
  setFavourites: () => {},
  updateFavourites: () => {},
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

  const contextValue = useMemo(
    () => ({
      cart,
      setCart,
      updateCart,
      favourites,
      setFavourites,
      updateFavourites,
    }),
    [cart, favourites],
  );

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
