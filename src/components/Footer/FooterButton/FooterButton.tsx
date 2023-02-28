/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { memo } from 'react';
import '../Footer.scss';

export const FooterButton: React.FC = memo(() => {
  return (
    <div className="back_to_top">
      <a href="/" className="link_back_to_top link">
        Back to top
      </a>
      <button className="btn" type="button" />
    </div>
  );
});
