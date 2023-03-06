// eslint-disable-next-line object-curly-newline
import React, { ReactElement, useState, useMemo, useCallback } from 'react';
import { CartItem } from '../../types/CartItem';

type Props = {
  children: ReactElement;
};

type GlobalContextType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  updateCart: (newCart: CartItem[]) => void;
};

export const GlobalContext = React.createContext<GlobalContextType>({
  cart: [],
  setCart: () => {},
  updateCart: () => {},
});

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem('cart') || '[]'),
  );

  const updateCart = useCallback((newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }, []);

  const contextValue = useMemo(
    () => ({
      cart,
      setCart,
      updateCart,
    }),
    [cart],
  );

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
