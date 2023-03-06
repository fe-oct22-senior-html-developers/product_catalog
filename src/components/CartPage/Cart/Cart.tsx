import React from 'react';
import './Cart.scss';
import phonesFromServer from './tempData/phones.json';
import { Phone } from './tempData/phone';
import { CartItem } from '../CartItem';
import { CartTotal } from '../CartTotal';
import { CartList } from '../CartList';

const phones: Phone[] = phonesFromServer;
const itemNum = phonesFromServer.length;

export const Cart: React.FC = () => {
  return (
    <section className="cart page__cart container grid">
      <CartList>
        {phones.map((phone) => (
          <li className="cart__list-item" key={phone.id}>
            <CartItem phone={phone} />
          </li>
        ))}
      </CartList>

      <CartTotal total={1234} itemsNum={itemNum} />
    </section>
  );
};
