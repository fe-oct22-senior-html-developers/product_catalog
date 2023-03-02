import React, { memo } from 'react';
import { Logo } from '../Logo/Logo';
import { FooterButton } from './FooterButton/FooterButton';
import { FooterNav } from './FooterNav/FooterNav';
import './Footer.scss';

export const Footer: React.FC = memo(() => {
  return (
    <div className="footer__shadow">
      <footer className="footer ">
        <Logo />
        <FooterNav />
        <FooterButton />
      </footer>
    </div>
  );
});
