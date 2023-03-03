import React from 'react';
import './Cart.scss';
import phonesFromServer from './tempData/phones.json';
import { Phone } from './tempData/phone';
import { CartItem } from '../CartItem';
import { CartTotal } from '../CartTotal';

const phones: Phone[] = phonesFromServer;

export const Cart: React.FC = () => {
  return (
    <div className="cart page__cart container grid">
      <div className="
        grid__item--tablet_1-12
        grid__item--desktop_1-16"
      >
        {phones.map((phone) => (
          <CartItem phone={phone} key={phone.id} />
        ))}
      </div>
      <div
        className="
          grid__item--tablet_1-12
          grid__item--desktop_17-24
          card__total"
      >
        <CartTotal total={1234} itemsNum={3} />
      </div>
    </div>
  );
};
