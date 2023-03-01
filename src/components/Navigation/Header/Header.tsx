import React, { useState } from 'react';
import cn from 'classnames';
import './Header.scss';
import { Navigation } from '../Nav/Nav';
import { IconBlock } from '../IconBlock';
import { HumurgerMenu } from '../HumburgerMenu/HumburgerMenu';
import { Logo } from '../../Logo';

export const Header: React.FC = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpening = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();

    return setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header page__header">
        <div className="header__links">
          <Logo />
          <Navigation />
        </div>

        <div className="header__menu">
          <a
            href="#menu"
            className="header__menu-opener"
            onClick={(event) => handleMenuOpening(event)}
          >
            <div
              className={cn('header__menu-icon', {
                'header__menu-icon--opened': isOpen,
                'header__menu-icon--closed': !isOpen,
              })}
            >
            </div>
          </a>
        </div>

        <div className="header__icons">
          <IconBlock iconName="favourites" to="/favourites" />
          <IconBlock iconName="cart" to="/cart" />
        </div>
      </header>

      <HumurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
});
