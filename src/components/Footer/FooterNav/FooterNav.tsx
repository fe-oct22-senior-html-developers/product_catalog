import React, { memo } from 'react';
import { FooterNavLink } from '../FooterNavLink/FooterNavLink';
import '../Footer.scss';

export const FooterNav: React.FC = memo(() => {
  return (
    <div className="navigation">
      <FooterNavLink
        to="https://github.com/fe-oct22-senior-html-developers/product_catalog"
        text="github"
      />
      <FooterNavLink to="/contacts" text="contacts" />
      <FooterNavLink to="/rights" text="rights" />
    </div>
  );
});
