import React from 'react';
import './HomePage.scss';
import { ShopByCategory } from '../../components/HomePage/ShopByCategory';
// import { PageTitle } from '../../components/PageTitle';
import { WebSiteTitle } from '../../components/WebSiteTitle';
import { BrandNewModels } from '../../components/HomePage/BrandNewModels';
import { Banner } from '../../components/HomePage/Banner';

type Props = {
  pageTitle: string;
};

export const HomePage: React.FC<Props> = () => {
  return (
    <div className="home-page">
      <WebSiteTitle />
      <Banner />
      <BrandNewModels />
      <ShopByCategory />
      <div>Carousel 3</div>
    </div>
  );
};
