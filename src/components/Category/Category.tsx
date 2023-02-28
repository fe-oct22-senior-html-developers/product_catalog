import React, { memo } from 'react';
import './Category.scss';
import image from './images/Phones.png';
import image2 from './images/Phones2.png';
import image3 from './images/Phones3.png';

export const Category: React.FC = memo(() => {
  return (
    <div className="section">
      <div className="grid">
        <div
          className="
          grid__item
          grid__item--tablet_1-4
          grid__item--desktop_1-8"
        >
          <div className="card">
            <div className="card__photo-container">
              <img src={image} alt="Collection Areas" className="card__photo" />
            </div>
            <h3 className="card__title">Mobile phones</h3>
            <p className="card__text">95 models</p>
          </div>
        </div>

        <div
          className="
          grid__item
          grid__item--tablet_5-8
          grid__item--desktop_9-16"
        >
          <div className="card">
            <div className="card__photo-container">
              <img
                src={image2}
                alt="Collection Areas"
                className="card__photo"
              />
            </div>
            <h3 className="card__title">Tablets</h3>
            <p className="card__text">24 models</p>
          </div>
        </div>

        <div
          className="
          grid__item
          grid__item--tablet_9-12
          grid__item--desktop_17-24"
        >
          <div className="card">
            <div className="card__photo-container">
              <img
                src={image3}
                alt="Collection Areas"
                className="card__photo"
              />
            </div>
            <h3 className="card__title">Accessories</h3>
            <p className="card__text">100 models</p>
          </div>
        </div>
      </div>
    </div>
  );
});
