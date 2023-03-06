import React, { memo } from 'react';
import cn from 'classnames';
import './BurgerMenu.scss';
// import { NavLink } from 'react-router-dom';
import { Nav } from '../Nav';
import { IconBlock } from '../IconBlock';

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<Props> = memo(
  ({ isMenuOpen, setIsMenuOpened }) => (
    <div className={cn('burger-menu', { 'burger-menu--active': isMenuOpen })}>
      <Nav setIsMenuOpened={setIsMenuOpened} />
      <div className="burger-menu__icons">
        <IconBlock
          iconName="Favourites"
          to="/favourites"
          setIsMenuOpened={setIsMenuOpened}
        />
        <IconBlock
          iconName="Cart"
          to="/cart"
          setIsMenuOpened={setIsMenuOpened}
        />
      </div>
      {/* <div className="burger-menu__icons">
        <div className="burger-menu__icon-block">
          <NavLink
            title="Favourites"
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
            title="Cart"
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
      </div> */}
    </div>
  ),
);
