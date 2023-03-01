import React from 'react';
import './FavouritesPage.scss';
import { PageTitle } from '../../components/PageTitle';

type Props = {
  pageTitle: string;
};

export const FavouritesPage: React.FC<Props> = ({ pageTitle }) => {
  return (
    <div className="favourites-page">
      <div>Breadcrumbs</div>
      <PageTitle mixClass="favourites-page__title">{pageTitle}</PageTitle>
      <div>Amount</div>
      <div>Favourites cards</div>
    </div>
  );
};
