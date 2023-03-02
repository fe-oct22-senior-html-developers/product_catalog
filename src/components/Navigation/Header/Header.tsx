import React, { useState } from 'react';
import cn from 'classnames';
import './Header.scss';
import { Nav } from '../Nav/Nav';
import { IconBlock } from '../IconBlock';
import { Logo } from '../../Logo';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const Header: React.FC = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpening = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();

    if (isOpen) {
      document.body.classList.remove('page--with-menu');
    } else {
      document.body.classList.add('page--with-menu');
    }

    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header page__header">
        <div className="header__links">
          <div className="header__logo">
            <Logo setIsOpen={setIsOpen} />
          </div>
          <div className="header__nav">
            <Nav setIsOpen={setIsOpen} />
          </div>
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
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
});
