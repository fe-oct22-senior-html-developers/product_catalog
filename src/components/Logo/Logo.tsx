import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';
import logo from '../../static/Logo.svg';

interface Props {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Logo: React.FC<Props> = memo(({ setIsOpen }) => {
  return setIsOpen ? (
    <Link className="logo" to="/" onClick={() => setIsOpen(false)}>
      <img src={logo} className="logo_image" alt="NiceGadgets logo" />
    </Link>
  ) : (
    <Link className="logo" to="/">
      <img src={logo} className="logo__image" alt="NiceGadgets logo" />
    </Link>
  );
});
