import React from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { Breadcrumbs } from '../../components/Breadcrumbs';
// import { ProductDetailsBanner } from '../../components/Product/ProductDetailsBanner';
import { ProductSidebar } from '../../components/ProductSidebar';

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

  const phoneExtended = {
    id: 'apple-iphone-11-128gb-black',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 128GB Black',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 1100,
    priceDiscount: 1050,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'black',
    screen: '6.1` IPS',
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  };

  return (
    <div className="container">
      <Breadcrumbs />
      <BackButton />
      <div>{`Section title component ${productId}`}</div>
      <div className="grid">
        <ProductSidebar phone={phone} phoneExtended={phoneExtended} />
      </div>
    </div>
  );
};
