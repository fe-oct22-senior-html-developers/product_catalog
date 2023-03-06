import React from 'react';

export const CartList: React.FC = ({ children }) => {
  return (
    <ul
      className="
        cart__list
        grid__item--tablet_1-12
        grid__item--desktop_1-16"
    >
      {children}
    </ul>
  );
};
