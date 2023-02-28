import React, { memo } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';

interface Props {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HumurgerMenu: React.FC<Props> = memo(({ isOpen }) => {
  return (
    <section className={cn('humburgerMenu', { 'humburgerMenu--isActive': isOpen })}>
      <Navigation />

      <div className="humburgerMenu__icons">
        <div className="humburgerMenu__square">
          <Link to="/favourites" className="humburgerMenu__icons-link">
            <div className="humburgerMenu__icon humburgerMenu__icon--favourites"></div>
          </Link>
        </div>

        <div className="humburgerMenu__square">
          <Link to="/cart" className="burgerMenu__icons-link">
            <div className="humburgerMenu__icon humburgerMenu__icon--cart"></div>
          </Link>
        </div>
      </div>
    </section>
  );
});
