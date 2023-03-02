import React, { useCallback, useEffect, useState } from 'react';
import cn from 'classnames';
import './Header.scss';
import { Nav } from '../Nav/Nav';
import { IconBlock } from '../IconBlock';
import { Logo } from '../../Logo';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
// import { is } from '@babel/types';

export const Header: React.FC = React.memo(() => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleMenuOpening = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      setIsMenuOpened(current => !current);
    }, [],
  );

  useEffect(() => {
    return isMenuOpened
      ? document.body.classList.add('page--with-menu')
      : document.body.classList.remove('page--with-menu');
  }, [isMenuOpened]);
  // const handleMenuClosing = () => {
  //   setIsMenuOpen(false);

  //   document.body.classList.remove('page--with-menu');
  // };

  return (
    <>
      <header className="header page__header">
        <div className="header__links">
          <div className="header__logo">
            <Logo setIsMenuOpened={setIsMenuOpened} />
          </div>
          <div className="header__nav">
            <Nav setIsMenuOpened={setIsMenuOpened} />
          </div>
        </div>

        <div className="header__menu">
          <button
            type="button"
            className="header__menu-opener"
            onClick={(event) => handleMenuOpening(event)}
          >
            <div
              className={cn('header__menu-icon', {
                'header__menu-icon--opened': isMenuOpened,
                'header__menu-icon--closed': !isMenuOpened,
              })}
            >
            </div>
          </button>
        </div>

        <div className="header__icons">
          <IconBlock iconName="favourites" to="/favourites" />
          <IconBlock iconName="cart" to="/cart" />
        </div>
      </header>
      <BurgerMenu isMenuOpen={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
    </>
  );
});
