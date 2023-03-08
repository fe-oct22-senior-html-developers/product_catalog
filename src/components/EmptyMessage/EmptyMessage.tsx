import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import './EmptyMessage.scss';

interface Props {
  image: string;
  btnText: string;
}

export const EmptyMessage: React.FC<Props> = memo(({ image, btnText }) => {
  return (
    <section className="container empty-message">
      <div className="empty-message__inner">
        <img src={image} alt="EmptySpace" className="empty-message__img" />
        <p className="text">Oopps... It is empty in here.</p>
      </div>
      <Link to="/phones" className="empty-message__btn">
        {btnText}
      </Link>
    </section>
  );
});
