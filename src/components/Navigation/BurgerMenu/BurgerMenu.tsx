import React, { memo, useContext } from 'react';
import cn from 'classnames';
import './BurgerMenu.scss';
import { Nav } from '../Nav';
import { IconBlock } from '../IconBlock';
import { GlobalContext } from '../../../contexts/GlobalProvider/GlobalProvider';

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<Props> = memo(
  ({ isMenuOpen, setIsMenuOpened }) => {
    const { cartLength, favouritesLength } = useContext(GlobalContext);

    return (
      <div className={cn('burger-menu', { 'burger-menu--active': isMenuOpen })}>
        <Nav setIsMenuOpened={setIsMenuOpened} />
        <div className="burger-menu__icons">
          <IconBlock
            iconName="Favourites"
            to="/favourites"
            setIsMenuOpened={setIsMenuOpened}
            counter={favouritesLength}
          />
          <IconBlock
            iconName="Cart"
            to="/cart"
            setIsMenuOpened={setIsMenuOpened}
            counter={cartLength}
          />
        </div>
      </div>
    );
  },
);
