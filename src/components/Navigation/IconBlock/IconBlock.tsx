import React from 'react';
import cn from 'classnames';
import './IconBlock.scss';
import { NavLink, To } from 'react-router-dom';

interface Props {
  iconName: string;
  to: To;
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpened?: boolean;
}

export const IconBlock: React.FC<Props> = React.memo(
  ({ iconName, to, setIsMenuOpened }) => (
    <div className="iconBlock">
      <NavLink
        title={iconName}
        aria-label={iconName}
        to={to}
        className={({ isActive }) => cn('iconBlock__link', {
          'iconBlock__link--active': isActive,
        })}
        onClick={() => setIsMenuOpened(false)}
      >
        <div className={`iconBlock__icon iconBlock__icon--${iconName}`}></div>
      </NavLink>
    </div>
  ),
);
