import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getPhoneDetails } from '../../api/requests';
import { BackButton } from '../../components/BackButton';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductSidebar } from '../../components/ProductSidebar';
import { PhoneDetails } from '../../types/PhoneDetails';

export const ProductDetailsPage: React.FC = () => {
  const [product, setProduct] = useState<PhoneDetails>();

  const { productId } = useParams();

  const phoneMinimal = {
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

  useEffect(() => {
    getPhoneDetails(productId || '')
      .then((res) => setProduct(res.data))
      .catch((error) => window.console.log(error));
  }, [product]);

  const handleProductChange = useCallback((newProductId: string) => {
    getPhoneDetails(newProductId || '')
      .then((res) => setProduct(res.data))
      .catch((error) => window.console.log(error));
  }, []);

  return (
    <div className="container">
      <Breadcrumbs />
      <BackButton />
      <div>{`Section title component ${productId}`}</div>
      <div className="grid">
        {
          product && (
            <ProductSidebar
              productExtended={product}
              product={phoneMinimal}
              setProduct={setProduct}
              handleProductChange={handleProductChange}
            />
          )
        }
      </div>
    </div>
  );
};
