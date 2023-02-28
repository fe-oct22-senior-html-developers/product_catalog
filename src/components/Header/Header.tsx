import React, { useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import logo from './Header.images/Logo.svg';
import { Navigation } from '../Navigation/Navigation';
import { IconBlock } from '../IconBlock';
import { HumurgerMenu } from '../HumburgerMenu/HumburgerMenu';

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
          <Link to="/" className="header__home-link">
            <img className="header__logo" src={logo} alt="Nice Gadgets logo" />
          </Link>

          <section className="header__nav">
            <Navigation />
          </section>
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

      <HumurgerMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
});
