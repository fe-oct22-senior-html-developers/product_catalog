// eslint-disable-next-line object-curly-newline
import React, { ReactElement, useState, useMemo, useCallback } from 'react';
import { CartItem } from '../../types/CartItem';
import { Phone } from '../../types/Phone';

const testCartItems: CartItem[] = [
  {
    id: 1,
    quantity: 1,
    product: {
      id: '1',
      category: 'phones',
      phoneId: 'apple-iphone-7-32gb-black',
      itemId: 'apple-iphone-7-32gb-black',
      name: 'Apple iPhone 7 32GB Black',
      fullPrice: 400,
      price: 375,
      screen: "4.7' IPS",
      capacity: '32GB',
      color: 'black',
      ram: '2GB',
      year: 2016,
      image: 'img/phones/apple-iphone-7/black/00.jpg',
    },
  },
  {
    id: 2,
    quantity: 1,
    product: {
      id: '2',
      category: 'phones',
      phoneId: 'apple-iphone-7-plus-32gb-black',
      itemId: 'apple-iphone-7-plus-32gb-black',
      name: 'Apple iPhone 7 Plus 32GB Black',
      fullPrice: 540,
      price: 500,
      screen: "5.5' IPS",
      capacity: '32GB',
      color: 'black',
      ram: '3GB',
      year: 2016,
      image: 'img/phones/apple-iphone-7-plus/black/00.jpg',
    },
  },
  {
    id: 3,
    quantity: 1,
    product: {
      id: '3',
      category: 'phones',
      phoneId: 'apple-iphone-8-64gb-gold',
      itemId: 'apple-iphone-8-64gb-gold',
      name: 'Apple iPhone 8 64GB Gold',
      fullPrice: 600,
      price: 550,
      screen: "4.7' IPS",
      capacity: '64GB',
      color: 'gold',
      ram: '2GB',
      year: 2017,
      image: 'img/phones/apple-iphone-8/gold/00.jpg',
    },
  },
  {
    id: 4,
    quantity: 1,
    product: {
      id: '4',
      category: 'phones',
      phoneId: 'apple-iphone-11-64gb-black',
      itemId: 'apple-iphone-11-64gb-black',
      name: 'Apple iPhone 11 64GB Black',
      fullPrice: 932,
      price: 880,
      screen: "6.1' IPS",
      capacity: '64GB',
      color: 'black',
      ram: '4GB',
      year: 2019,
      image: 'img/phones/apple-iphone-11/black/00.jpg',
    },
  },
  {
    id: 5,
    quantity: 1,
    product: {
      id: '5',
      category: 'phones',
      phoneId: 'apple-iphone-11-128gb-yellow',
      itemId: 'apple-iphone-11-128gb-yellow',
      name: 'Apple iPhone 11 128GB Yellow',
      fullPrice: 1100,
      price: 1050,
      screen: "6.1' IPS",
      capacity: '128GB',
      color: 'yellow',
      ram: '4GB',
      year: 2019,
      image: 'img/phones/apple-iphone-11/yellow/00.jpg',
    },
  },
];

localStorage.setItem('cart', JSON.stringify(testCartItems));

type Props = {
  children: ReactElement;
};

type GlobalContextType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  updateCart: (newCart: CartItem[]) => void;
  cartLength: number,
  favourites: Phone[];
  setFavourites: React.Dispatch<React.SetStateAction<Phone[]>>;
  updateFavourites: (newFavourites: Phone[]) => void;
  favouritesLength: number,
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
