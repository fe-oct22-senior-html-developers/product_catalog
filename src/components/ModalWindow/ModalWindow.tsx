import React from 'react';
import './ModalWindow.scss';

export const ModalWindow: React.FC = React.memo(() => {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__header"></div>
        <p className="modal__text">Thank you for purchase!</p>
      </div>
    </div>
  );
});
