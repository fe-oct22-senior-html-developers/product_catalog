import React from 'react';
import { NavItem } from '../NavItem/NavItem';

export const Navigation: React.FC = React.memo(() => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavItem title="home" to="/" />
        <NavItem title="Phones" to="phones" />
        <NavItem title="Tablets" to="tablets" />
        <NavItem title="Accessories" to="accesories" />
      </ul>
    </nav>
  );
});
