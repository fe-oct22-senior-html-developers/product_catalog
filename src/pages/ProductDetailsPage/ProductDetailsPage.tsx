import React from 'react';
import { useParams } from 'react-router-dom';

export const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams();

  return (
    <>
      <div>{`Section title component ${productId}`}</div>
    </>
  );
};
