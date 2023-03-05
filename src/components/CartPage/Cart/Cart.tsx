import React from 'react';
import phonesFromServer from './tempData/phones.json';
import { Phone } from './tempData/phone';
import { CartItem } from '../CartItem';
import { CartTotal } from '../CartTotal';

const phones: Phone[] = phonesFromServer;
const itemNum = phonesFromServer.length;

export const Cart: React.FC = () => {
  return (
    <section className="cart page__cart container grid">
      <div
        className="
        grid__item--tablet_1-12
        grid__item--desktop_1-16"
      >
        {phones.map((phone) => (
          <CartItem phone={phone} key={phone.id} />
        ))}
      </div>

      <CartTotal total={1234} itemsNum={itemNum} />
    </section>
  );
};
