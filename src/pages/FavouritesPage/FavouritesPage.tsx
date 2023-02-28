import React from 'react';
import { PageTitle } from '../../components/PageTitle';

type Props = {
  pageTitle: string;
};

export const FavouritesPage: React.FC<Props> = ({ pageTitle }) => {
  return (
    <>
      <div>Breadcrumbs</div>
      <PageTitle>{pageTitle}</PageTitle>
      <div>Amount</div>
      <div>Favourites cards</div>
    </>
  );
};
