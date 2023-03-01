import React from 'react';
import { ShopByCategory } from '../../components/HomePage/ShopByCategory';
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
      <ShopByCategory />
      <div>Carousel 3</div>
    </>
  );
};
