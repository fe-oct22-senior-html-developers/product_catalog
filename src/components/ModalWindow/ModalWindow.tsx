import React from 'react';
import './ModalWindow.scss';

export const ModalWindow: React.FC = React.memo(() => (
  <div className="modal">
    <div className="modal__content">
      <div className="modal__wrapper">
        <svg className="modal__animated-check" viewBox="0 0 24 24">
          <path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" />
        </svg>
      </div>

      <p className="modal__text-big">
        Woohoo!
        <br />
        Your order has been placed.
      </p>

      <p className="modal__text-small">
        Pull up a chair, sit back and relax as your order is on its way to you!
      </p>
    </div>
  </div>
));
