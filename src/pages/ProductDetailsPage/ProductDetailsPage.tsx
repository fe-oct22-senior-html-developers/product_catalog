import React from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductColors } from '../../components/ProductColors';

export const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams();

  return (
    <div className="container">
      <Breadcrumbs />
      <BackButton />
      <div>{`Section title component ${productId}`}</div>
      <ProductColors />
    </div>
  );
};
