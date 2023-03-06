import React from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';

export const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams();

  return (
    <div className="container">
      <BackButton />
      <div>{`Section title component ${productId}`}</div>
    </div>
  );
};
