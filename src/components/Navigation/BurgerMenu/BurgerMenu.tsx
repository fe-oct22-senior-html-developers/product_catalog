import React, { memo } from 'react';
import cn from 'classnames';
import './BurgerMenu.scss';
import { NavLink } from 'react-router-dom';
import { Nav } from '../Nav/Nav';

interface Props {
  isMenuOpen: boolean;
  handleMenuClosing: () => void;
}

export const BurgerMenu: React.FC<Props> = memo(
  ({ isMenuOpen, handleMenuClosing }) => (
    <section className={cn('burgerMenu', { 'burgerMenu--active': isMenuOpen })}>
      <Nav handleMenuClosing={handleMenuClosing} />

      <div className="burgerMenu__icons">
        <div className="burgerMenu__icon-block">
          <NavLink
            to="/favourites"
            className={({ isActive }) => cn('burgerMenu__icon-link', {
              'burgerMenu__icon-link--active': isActive,
            })}
            onClick={() => handleMenuClosing()}
          >
            <div className="burgerMenu__icon burgerMenu__icon--favourites"></div>
          </NavLink>
        </div>

        <div className="burgerMenu__icon-block">
          <NavLink
            to="/cart"
            className={({ isActive }) => cn('burgerMenu__icon-link', {
              'burgerMenu__icon-link--active': isActive,
            })}
            onClick={() => handleMenuClosing()}
          >
            <div className="burgerMenu__icon burgerMenu__icon--cart"></div>
          </NavLink>
        </div>
      </div>
    </section>
  ),
);
