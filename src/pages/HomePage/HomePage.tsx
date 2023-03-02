import React from 'react';
import './HomePage.scss';
import { ShopByCategory } from '../../components/HomePage/ShopByCategory';
import { PageTitle } from '../../components/PageTitle';
import { WebSiteTitle } from '../../components/WebSiteTitle';

type Props = {
  pageTitle: string;
};

export const HomePage: React.FC<Props> = ({ pageTitle }) => {
  return (
    <div className="home-page">
      <WebSiteTitle />
      <div className="container">
        <PageTitle mixClass="home-page__title">{pageTitle}</PageTitle>
      </div>
      <div>Carousel 1</div>
      <div>Carousel 2</div>
      <ShopByCategory />
      <div>Carousel 3</div>
    </div>
  );
};
