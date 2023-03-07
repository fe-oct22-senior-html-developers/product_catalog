import React from 'react';
import './FavouritesPage.scss';
import { PageTitle } from '../../components/PageTitle';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Favourites } from '../../components/FavouritesPage/Favourites';

type Props = {
  pageTitle: string;
};

export const FavouritesPage: React.FC<Props> = ({ pageTitle }) => {
  return (
    <div className="favourites-page">
      <div className="container page__favourites">
        <Breadcrumbs />
        <PageTitle mixClass="favourites-page__title">{pageTitle}</PageTitle>
        <Favourites />
      </div>
    </div>
  );
};
