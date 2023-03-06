import React, { memo } from 'react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import './BackButton.scss';
import '../../sassStyles/blocks/_page.scss';

interface Props {
  isAlone?: boolean;
}

export const BackButton: React.FC<Props> = memo(({ isAlone }) => {
  const history = useNavigate();

  return (
    <button
      type="button"
      aria-label="click to go back"
      className={cn('back-button', {
        'page__alone-back-button': isAlone,
        'page__back-button': !isAlone,
      })}
      onClick={() => history(-1)}
    >
      <div className="back-button__icon"></div>
      Back
    </button>
  );
});
