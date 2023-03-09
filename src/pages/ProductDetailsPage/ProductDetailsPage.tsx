import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getPhoneDetails } from '../../api/requests';
import { BackButton } from '../../components/BackButton';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductSidebar } from '../../components/ProductSidebar';
// import { FullPhone } from '../../types/FullPhone';
import { Phone } from '../../types/Phone';
import { PhoneDetails } from '../../types/PhoneDetails';

export const ProductDetailsPage: React.FC = () => {
  const [productDetails, setProductDetails] = useState<PhoneDetails>();
  const [product, setProduct] = useState<Phone>();

  const { productId } = useParams();

  useEffect(() => {
    getPhoneDetails(productId || '')
      .then((res) => {
        const { phone, phoneDetails } = res.data;

        setProduct(JSON.parse(phone));
        setProductDetails(JSON.parse(phoneDetails));
      })
      .catch((error) => window.console.log(error));
  }, []);

  const handleProductChange = useCallback((newProductId: string) => {
    getPhoneDetails(newProductId || '')
      .then((res) => {
        const { phone, phoneDetails } = res.data;

        setProduct(JSON.parse(phone));
        setProductDetails(JSON.parse(phoneDetails));
      })
      .catch((error) => window.console.log(error));
  }, []);

  return (
    <div className="container">
      <Breadcrumbs />
      <BackButton />
      <div>{`Section title component ${productId}`}</div>
      <div className="grid">
        {product && productDetails && (
          <ProductSidebar
            productExtended={productDetails}
            product={product}
            handleProductChange={handleProductChange}
          />
        )}
      </div>
    </div>
  );
};
