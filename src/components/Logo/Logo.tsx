import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';
import logo from '../../static/Logo.svg';

interface Props {
  setIsMenuOpened?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Logo: React.FC<Props> = memo(({ setIsMenuOpened }) => {
  return setIsMenuOpened ? (
    <Link
      title="Nice Gadgets - Home Page"
      className="logo"
      to="/"
      onClick={() => setIsMenuOpened(false)}
    >
      <img src={logo} className="logo__image" alt="NiceGadgets logo" />
    </Link>
  ) : (
    <Link title="Nice Gadgets - Home Page" className="logo" to="/">
      <img src={logo} className="logo__image" alt="NiceGadgets logo" />
    </Link>
  );
});
