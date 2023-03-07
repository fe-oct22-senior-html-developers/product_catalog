import React from 'react';
import './ProductPage.scss';
import { PageTitle } from '../../components/PageTitle';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Card } from '../../components/Card';

type Props = {
  pageTitle: string;
};

export const ProductPage: React.FC<Props> = ({ pageTitle }) => {
  const phones = [
    {
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
    },
    {
      id: '2',
      category: 'phones',
      phoneId: 'apple-iphone-7-plus-32gb-black',
      itemId: 'apple-iphone-7-plus-32gb-black',
      name: 'Apple iPhone 7 Plus 32GB Black',
      fullPrice: 540,
      price: 500,
      screen: "5.5' IPS",
      capacity: '32GB',
      color: 'black',
      ram: '3GB',
      year: 2016,
      image: 'img/phones/apple-iphone-7-plus/black/00.jpg',
    },
    {
      id: '3',
      category: 'phones',
      phoneId: 'apple-iphone-8-64gb-gold',
      itemId: 'apple-iphone-8-64gb-gold',
      name: 'Apple iPhone 8 64GB Gold',
      fullPrice: 600,
      price: 550,
      screen: "4.7' IPS",
      capacity: '64GB',
      color: 'gold',
      ram: '2GB',
      year: 2017,
      image: 'img/phones/apple-iphone-8/gold/00.jpg',
    },
    {
      id: '4',
      category: 'phones',
      phoneId: 'apple-iphone-11-64gb-black',
      itemId: 'apple-iphone-11-64gb-black',
      name: 'Apple iPhone 11 64GB Black',
      fullPrice: 932,
      price: 880,
      screen: "6.1' IPS",
      capacity: '64GB',
      color: 'black',
      ram: '4GB',
      year: 2019,
      image: 'img/phones/apple-iphone-11/black/00.jpg',
    },
    {
      id: '5',
      category: 'phones',
      phoneId: 'apple-iphone-11-128gb-yellow',
      itemId: 'apple-iphone-11-128gb-yellow',
      name: 'Apple iPhone 11 128GB Yellow',
      fullPrice: 1100,
      price: 1050,
      screen: "6.1' IPS",
      capacity: '128GB',
      color: 'yellow',
      ram: '4GB',
      year: 2019,
      image: 'img/phones/apple-iphone-11/yellow/00.jpg',
    },
  ];

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
      {
        phones.map(phone => (
          <Card phone={phone} key={phone.id} />
        ))
      }
    </div>
  );
};
