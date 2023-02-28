import React, { FC } from 'react';
import cn from 'classnames';
import { NavLink, To } from 'react-router-dom';

interface Props {
  to: To;
  title: string;
}

export const NavItem: FC<Props> = ({ to, title }) => {
  return (
    <li className="navItem navItem--active">
      <NavLink
        to={to}
        className={({ isActive }) => cn('navItem__link', {
          'navItem__link--isActive': isActive,
        })}
      >
        {title}
      </NavLink>
    </li>
  );
};
