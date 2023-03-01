import React from 'react';
import './Nav.scss';
import { NavItem } from './NavItem';

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Nav: React.FC<Props> = React.memo(({ setIsOpen }) => (
  <nav className="nav">
    <ul className="nav__list">
      <NavItem setIsOpen={setIsOpen} title="home" to="/" />
      <NavItem setIsOpen={setIsOpen} title="Phones" to="phones" />
      <NavItem setIsOpen={setIsOpen} title="Tablets" to="tablets" />
      <NavItem setIsOpen={setIsOpen} title="Accessories" to="accessories" />
    </ul>
  </nav>
));
