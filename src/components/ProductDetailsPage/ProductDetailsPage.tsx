import React from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from '../BackButton';
import { Breadcrumbs } from '../Breadcrumbs';

export const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams();

  return (
    <div className="container">
      <Breadcrumbs />
      <BackButton />
      <div>{`Section title component ${productId}`}</div>
    </div>
  );
};
