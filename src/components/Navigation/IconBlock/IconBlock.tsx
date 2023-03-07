import React from 'react';
import cn from 'classnames';
import './IconBlock.scss';
import { NavLink, To } from 'react-router-dom';

interface Props {
  iconName: string;
  to: To;
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpened?: boolean;
  counter: number;
}

export const IconBlock: React.FC<Props> = React.memo(
  ({
    iconName, to, setIsMenuOpened, counter,
  }) => {
    return (
      <div className="icon-block">
        <NavLink
          title={iconName}
          aria-label={iconName}
          to={to}
          className={({ isActive }) => cn('icon-block__link', {
            'icon-block__link--active': isActive,
          })}
          onClick={() => setIsMenuOpened(false)}
        >
          <div className={`icon-block__icon icon-block__icon--${iconName}`}>
            {counter > 0 && (
              <div className="icon-block__counter">
                <div className="icon-block__number">{counter}</div>
              </div>
            )}
          </div>
        </NavLink>
      </div>
    );
  },
);
