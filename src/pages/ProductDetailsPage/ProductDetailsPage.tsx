import React from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductCapacity } from '../../components/ProductCapacity';

export const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams();

  return (
    <div className="container">
      <Breadcrumbs />
      <BackButton />
      <div>{`Section title component ${productId}`}</div>
      <ProductCapacity />
    </div>
  );
};
