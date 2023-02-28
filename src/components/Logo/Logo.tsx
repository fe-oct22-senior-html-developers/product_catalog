import React, { memo } from 'react';
import logo from './Logo.svg';
import './Logo.scss';

export const Logo: React.FC = memo(() => {
  return (
    <a className="logo" href="/">
      <img src={logo} className="logo_image" alt="NiceGadgets" />
    </a>
  );
});
