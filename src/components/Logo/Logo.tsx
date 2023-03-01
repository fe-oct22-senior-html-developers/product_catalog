import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';
import logo from '../../static/Logo.svg';

export const Logo: React.FC = memo(() => {
  return (
    <Link className="logo" to="/">
      <img src={logo} className="logo_image" alt="NiceGadgets logo" />
    </Link>
  );
});
