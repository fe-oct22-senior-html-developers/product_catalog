import React from 'react';
import './HomePage.scss';
import { ShopByCategory } from '../../components/HomePage/ShopByCategory';
import { PageTitle } from '../../components/PageTitle';
import { WebSiteTitle } from '../../components/WebSiteTitle';
import { Banner } from '../../components/Banner';
import { BrandNewModels } from '../../components/HomePage/BrandNewModels';
import { HotPrices } from '../../components/HomePage/HotPrices';

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
      <Banner />
      <BrandNewModels />
      <ShopByCategory />
      <HotPrices />
    </div>
  );
};
