import React, { useCallback, useEffect, useState } from 'react';
import cn from 'classnames';
import './Header.scss';
import { Nav } from '../Nav/Nav';
import { IconBlock } from '../IconBlock';
import { Logo } from '../../Logo';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
// import { GlobalContext } from '../../../contexts/GlobalProvider/GlobalProvider';

export const Header: React.FC = React.memo(() => {
  // const { cart } = useContext(GlobalContext);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleMenuOpening = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      setIsMenuOpened((current) => !current);
    },
    [],
  );

  useEffect(
    () => (isMenuOpened
      ? document.body.classList.add('page--with-menu')
      : document.body.classList.remove('page--with-menu')),
    [isMenuOpened],
  );

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
            title="Menu"
            aria-label="menu button"
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
      </header>
      <BurgerMenu isMenuOpen={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
    </>
  );
});
