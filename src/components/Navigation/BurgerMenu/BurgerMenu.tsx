import React, { memo } from 'react';
import cn from 'classnames';
import './BurgerMenu.scss';
import { NavLink } from 'react-router-dom';
import { Nav } from '../Nav';

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<Props> = memo(
  ({ isMenuOpen, setIsMenuOpened }) => (
    <section
      className={cn('burger-menu', { 'burger-menu--active': isMenuOpen })}
    >
      <Nav setIsMenuOpened={setIsMenuOpened} />

      <div className="burger-menu__icons">
        <div className="burger-menu__icon-block">
          <NavLink
            aria-label="favourites"
            to="/favourites"
            className={({ isActive }) => cn('burger-menu__icon-link', {
              'burger-menu__icon-link--active': isActive,
            })}
            onClick={() => setIsMenuOpened(false)}
          >
            <div className="burger-menu__icon burger-menu__icon--favourites"></div>
          </NavLink>
        </div>

        <div className="burger-menu__icon-block">
          <NavLink
            aria-label="cart"
            to="/cart"
            className={({ isActive }) => cn('burger-menu__icon-link', {
              'burger-menu__icon-link--active': isActive,
            })}
            onClick={() => setIsMenuOpened(false)}
          >
            <div className="burger-menu__icon burger-menu__icon--cart"></div>
          </NavLink>
        </div>
      </div>
    </section>
  ),
);
