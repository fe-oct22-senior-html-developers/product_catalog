import React from 'react';
import './Nav.scss';
import { NavItem } from './NavItem';

interface Props {
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Nav: React.FC<Props> = React.memo(({ setIsMenuOpened }) => (
  <nav className="nav">
    <ul className="nav__list">
      <NavItem setIsMenuOpened={setIsMenuOpened} title="home" to="/" />
      <NavItem
        setIsMenuOpened={setIsMenuOpened}
        title="Phones"
        to="phones"
      />
      <NavItem
        setIsMenuOpened={setIsMenuOpened}
        title="Tablets"
        to="tablets"
      />
      <NavItem
        setIsMenuOpened={setIsMenuOpened}
        title="Accessories"
        to="accessories"
      />
    </ul>
  </nav>
));
