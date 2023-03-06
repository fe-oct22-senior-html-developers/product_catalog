import React from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams();

  return (
    <div className="container">
      <Breadcrumbs />
      <div>{`Section title component ${productId}`}</div>
    </div>
  );
};
