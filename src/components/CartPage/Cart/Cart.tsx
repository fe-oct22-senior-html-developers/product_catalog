import React, { useContext } from 'react';
import './Cart.scss';
import { CartItem } from '../CartItem';
import { CartTotal } from '../CartTotal';
import { CartList } from '../CartList';
import { GlobalContext } from '../../../contexts/GlobalProvider/GlobalProvider';

export const Cart: React.FC = () => {
  const { cart } = useContext(GlobalContext);

  return (
    <section className="cart page__cart container grid">
      <CartList>
        {cart.map((cartItem) => (
          <li className="cart__list-item" key={cartItem.product.itemId}>
            <CartItem cartItem={cartItem} />
          </li>
        ))}
      </CartList>

      <CartTotal total={1234} itemsNum={cart.length} />
    </section>
  );
};
