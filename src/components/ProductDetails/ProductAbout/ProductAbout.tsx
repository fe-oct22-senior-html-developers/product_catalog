import React from 'react';
import { PhoneDetailsDescription } from '../../../types/PhoneDetails';
import './ProductAbout.scss';

type Props = {
  description: PhoneDetailsDescription[];
};

export const ProductAbout: React.FC<Props> = ({ description }) => {
  return (
    <div className="product__about">
      <h3 className="product__about--header">About</h3>
      {description.map((spec: PhoneDetailsDescription) => (
        <>
          <h4 className="product__about--title">{spec.title}</h4>
          <p className="product__about--content">
            {spec.text.map((text: string) => (
              <span key={text} className="product__about--text">
                {text}
              </span>
            ))}
          </p>
        </>
      ))}
    </div>
  );
};
