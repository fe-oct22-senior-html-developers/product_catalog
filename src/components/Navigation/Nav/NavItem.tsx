import React, { FC } from 'react';
import cn from 'classnames';
import './Nav.scss';
import { NavLink, To } from 'react-router-dom';

interface Props {
  to: To;
  title: string;
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavItem: FC<Props> = ({ to, title, setIsMenuOpened }) => (
  <li className="nav__item nav__item--active">
    <NavLink
      to={to}
      className={({ isActive }) => cn('nav__link', {
        'nav__link--active': isActive,
      })}
      onClick={() => setIsMenuOpened(false)}
    >
      {title}
    </NavLink>
  </li>
);
