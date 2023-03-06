/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { memo } from 'react';
import '../Footer.scss';

export const FooterButton: React.FC = memo(() => (
  <button
    type="button"
    className="footer__btn"
    onClick={() => {
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
    }}
  >
    <span className="footer__back-to-top">Back to top</span>
    <div className="footer__arrow-up"></div>
  </button>
));
