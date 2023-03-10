import React, { useContext } from 'react';
import './Cart.scss';
import { CartTotal } from '../CartTotal';
import { CartList } from '../CartList';
import { GlobalContext } from '../../../contexts/GlobalProvider/GlobalProvider';
import { CartItem } from '../CartItem';
import { EmptyMessage } from '../../EmptyMessage';
import Img from '../../../static/cart/emptyCart.jpg';

export const Cart: React.FC = () => {
  const { cart } = useContext(GlobalContext);

  const productsTotal = cart.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.product.price,
    0,
  );

  const itemsNum = cart.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0,
  );

  return (
    <>
      {itemsNum ? (
        <section className="cart page__cart container grid">
          <CartList>
            {cart.map((cartItem) => (
              <li className="cart__list-item" key={cartItem.product.itemId}>
                <CartItem cartItem={cartItem} />
              </li>
            ))}
          </CartList>
          <CartTotal total={productsTotal} itemsNum={itemsNum} />
        </section>
      ) : (
        <EmptyMessage image={Img} btnText="Buy" />
      )}
    </>
  );
};
