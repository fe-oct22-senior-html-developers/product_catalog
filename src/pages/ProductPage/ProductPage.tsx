import React from 'react';
import './ProductPage.scss';
import { PageTitle } from '../../components/PageTitle';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Card } from '../../components/Card';

type Props = {
  pageTitle: string;
};

export const ProductPage: React.FC<Props> = ({ pageTitle }) => {
  const phone = {
    id: '1',
    category: 'phones',
    phoneId: 'apple-iphone-7-32gb-black',
    itemId: 'apple-iphone-7-32gb-black',
    name: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    price: 375,
    screen: "4.7' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '2GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7/black/00.jpg',
  };

  return (
    <div className="product-page">
      <div className="container">
        <Breadcrumbs />
        <PageTitle mixClass="product-page__title">{pageTitle}</PageTitle>
      </div>
      <div>Data amount</div>
      <div>Sorting</div>
      <div>Datalist</div>
      <div>Pagination</div>

      <Card phone={phone} mixClass="" />
    </div>
  );
};
