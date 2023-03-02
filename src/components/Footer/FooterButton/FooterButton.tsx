/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { memo } from 'react';
import '../Footer.scss';

export const FooterButton: React.FC = memo(() => {
  return (
    <div className="footer__back-to-top">
      <a href="/#" className="footer__nav-link">
        Back to top
      </a>
      <button
        className="footer__back-btn"
        type="button"
        aria-label="Back to top btn"
      />
    </div>
  );
});
