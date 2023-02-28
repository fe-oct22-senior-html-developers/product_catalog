import React from 'react';
import { Category } from '../../components/Category';
import { PageTitle } from '../../components/PageTitle';

type Props = {
  pageTitle: string;
};

export const HomePage: React.FC<Props> = ({ pageTitle }) => {
  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
      <div>Carousel 1</div>
      <div>Carousel 2</div>
      <PageTitle>Shop by category</PageTitle>
      <Category />
      <div>Carousel 3</div>
    </>
  );
};
