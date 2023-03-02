import React, { FC } from 'react';
import cn from 'classnames';
import './Nav.scss';
import { NavLink, To } from 'react-router-dom';

interface Props {
  to: To;
  title: string;
  handleMenuClosing: () => void;
}

export const NavItem: FC<Props> = ({ to, title, handleMenuClosing }) => (
  <li className="nav__item nav__item--active">
    <NavLink
      to={to}
      className={({ isActive }) => cn('nav__link', {
        'nav__link--active': isActive,
      })}
      onClick={() => handleMenuClosing()}
    >
      {title}
    </NavLink>
  </li>
);
