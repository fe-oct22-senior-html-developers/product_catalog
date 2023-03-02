import React, { useState } from 'react';
// import cn from 'classnames';
import './Header.scss';
import { Nav } from '../Nav/Nav';
import { IconBlock } from '../IconBlock';
import { Logo } from '../../Logo';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
// import { is } from '@babel/types';

export const Header: React.FC = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpening = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setIsMenuOpen(true);

    document.body.classList.add('page--with-menu');
  };

  const handleMenuClosing = () => {
    setIsMenuOpen(false);

    document.body.classList.remove('page--with-menu');
  };

  return (
    <>
      <header className="header page__header">
        <div className="header__links">
          <div className="header__logo">
            <Logo handleMenuClosing={handleMenuClosing} />
          </div>
          <div className="header__nav">
            <Nav handleMenuClosing={handleMenuClosing} />
          </div>
        </div>

        <div className="header__menu">
          {isMenuOpen ? (
            <button
              type="button"
              className="header__menu-opener"
              onClick={() => handleMenuClosing()}
            >
              <div className="header__menu-icon header__menu-icon--opened"></div>
            </button>
          ) : (
            <button
              type="button"
              className="header__menu-opener"
              onClick={(event) => handleMenuOpening(event)}
            >
              <div className="header__menu-icon header__menu-icon--closed"></div>
            </button>
          )}
        </div>

        <div className="header__icons">
          <IconBlock iconName="favourites" to="/favourites" />
          <IconBlock iconName="cart" to="/cart" />
        </div>
      </header>
      <BurgerMenu
        isMenuOpen={isMenuOpen}
        handleMenuClosing={handleMenuClosing}
      />
    </>
  );
});
