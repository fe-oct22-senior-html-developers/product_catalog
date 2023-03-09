import React, { useState } from 'react';
import cn from 'classnames';
import DropDown from '../../../static/ProductPage/dropdown.svg';
import './CustomSelect.scss';
import { ItemsNum, SortBy } from '../../../types/CustomSelect';

type Props = {
  title: string;
  list: SortBy[] | ItemsNum[];
  current: string;
  mixClass: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updater: React.Dispatch<React.SetStateAction<any>>;
};

export const CustomSelect: React.FC<Props> = ({
  title,
  list,
  current,
  mixClass,
  updater,
}) => {
  const [opened, setOpened] = useState(false);

  const handleUpdate = (value: SortBy | ItemsNum) => {
    updater(value);
    setOpened(false);
  };

  return (
    <div className={`custom-select ${mixClass}`}>
      <p className="custom-select__title">{title}</p>
      <button
        type="button"
        className={cn('custom-select__header', {
          'custom-select__header--active': opened,
        })}
        aria-label={`${title} dropdown menu`}
        onClick={() => setOpened((currentOpened) => !currentOpened)}
      >
        <p className="custom-select__current">{current}</p>
        <img
          className={cn('custom-select__dropdown', {
            'custom-select__dropdown--active': opened,
          })}
          src={DropDown}
          alt="click to "
          aria-hidden="true"
        />
      </button>
      <ul
        className={cn('custom-select__list', {
          'custom-select__list--hidden': !opened,
        })}
      >
        {list.map((listItemName) => (
          <li className="custom-select__list-item" key={listItemName}>
            <button
              type="button"
              className={cn('custom-select__list-btn', {
                'custom-select__list-btn--active': current === listItemName,
              })}
              onClick={() => handleUpdate(listItemName)}
            >
              {listItemName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
