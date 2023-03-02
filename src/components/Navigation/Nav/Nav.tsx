import React from 'react';
import './Nav.scss';
import { NavItem } from './NavItem';

interface Props {
  handleMenuClosing: () => void;
}

export const Nav: React.FC<Props> = React.memo(({ handleMenuClosing }) => (
  <nav className="nav">
    <ul className="nav__list">
      <NavItem handleMenuClosing={handleMenuClosing} title="home" to="/" />
      <NavItem handleMenuClosing={handleMenuClosing} title="Phones" to="phones" />
      <NavItem handleMenuClosing={handleMenuClosing} title="Tablets" to="tablets" />
      <NavItem handleMenuClosing={handleMenuClosing} title="Accessories" to="accessories" />
    </ul>
  </nav>
));
