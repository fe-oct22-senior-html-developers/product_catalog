import React from 'react';
import './Button.scss';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className={className} type="submit">
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
};
