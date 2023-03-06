import React, { memo } from 'react';
import { Logo } from '../Logo/Logo';
import { FooterButton } from './FooterButton/FooterButton';
import { FooterNav } from './FooterNav/FooterNav';
import './Footer.scss';

export const Footer: React.FC = memo(() => {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <Logo />
        <FooterNav />
        <FooterButton />
      </div>
    </footer>
  );
});
