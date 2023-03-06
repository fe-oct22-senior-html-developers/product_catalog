import React, { memo } from 'react';
import { FooterNavLink } from '../FooterNavLink/FooterNavLink';
import '../Footer.scss';

export const FooterNav: React.FC = memo(() => {
  return (
    <div className="footer__nav">
      <FooterNavLink
        to="https://github.com/fe-oct22-senior-html-developers/product_catalog"
        text="github"
      />
      <FooterNavLink to="#" text="contacts" />
      <FooterNavLink to="#" text="rights" />
    </div>
  );
});
