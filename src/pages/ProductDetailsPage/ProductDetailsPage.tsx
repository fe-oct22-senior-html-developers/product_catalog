import React from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductPurchase } from '../../components/ProductPurchase';

export const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams();

  const phone = {
    id: '1',
    category: 'phones',
    phoneId: 'apple-iphone-7-32gb-black',
    itemId: 'apple-iphone-7-32gb-black',
    name: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    price: 375,
    screen: '4.7` IPS',
    capacity: '32GB',
    color: 'black',
    ram: '2GB',
    year: 2016,
    image:
      'https://raw.githubusercontent.com/fe-oct22-senior-html-developers/product_catalog_static/main/img/phones/apple-iphone-7/black/00.jpg',
  };

  return (
    <div className="container">
      <Breadcrumbs />
      <BackButton />
      <div>{`Section title component ${productId}`}</div>
      <ProductPurchase phone={phone} />
    </div>
  );
};
