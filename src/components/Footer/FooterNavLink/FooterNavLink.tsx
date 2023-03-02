import React, { memo } from 'react';
import '../Footer.scss';

type Props = {
  to: string;
  text: string;
};

export const FooterNavLink: React.FC<Props> = memo(({ to, text }) => (
  <a href={to} className="footer__nav-link">
    {text}
  </a>
));
