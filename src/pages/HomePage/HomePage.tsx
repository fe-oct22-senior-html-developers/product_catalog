import React from 'react';
import { PageTitle } from '../../components/PageTitle';

type Props = {
  pageTitle: string;
};

export const HomePage: React.FC<Props> = ({ pageTitle }) => {
  return (
    <>
      <PageTitle>{ pageTitle }</PageTitle>
      <div>Carousel 1</div>
      <div>Carousel 2</div>
      <div>Shop by category</div>
      <div>Carousel 3</div>
    </>
  );
};
