import React from 'react';
import cn from 'classnames';
import { NavLink, To } from 'react-router-dom';

interface Props {
  iconName: string;
  to: To;
  setIOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IconBlock: React.FC<Props> = React.memo(({ iconName, to }) => {
  return (
    <div className="iconBlock">
      <NavLink
        to={to}
        className={({ isActive }) => cn('iconBlock__link', {
          'iconBlock__link--isActive': isActive,
        })}
      >
        <div className={`iconBlock__icon iconBlock__icon--${iconName}`}></div>
        {/* <div className="iconBlock__icon, iconBlock__icon--favourites"></div> */}
      </NavLink>
    </div>
  );
});
