import React from 'react';
import './FavouritesPage.scss';
import { PageTitle } from '../../components/PageTitle';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { EmptyMessage } from '../../components/EmptyMessage';
import Img from '../../static/favourites/empty-box.png';

type Props = {
  pageTitle: string;
};

export const FavouritesPage: React.FC<Props> = ({ pageTitle }) => {
  return (
    <div className="favourites-page">
      <div className="container">
        <Breadcrumbs />
        <PageTitle mixClass="favourites-page__title">{pageTitle}</PageTitle>
      </div>
      <div>Amount</div>
      <div>Favourites cards</div>
      <EmptyMessage image={Img} btnText="Add" />
    </div>
  );
};
