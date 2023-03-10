/* eslint-disable object-curly-newline */
import React, { useState, useEffect, useCallback, memo } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import { getPhoneDetails, getRecommended } from '../../api/requests';
import { BackButton } from '../../components/BackButton';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductAbout } from '../../components/ProductDetails/ProductAbout';
import { ProductSidebar } from '../../components/ProductSidebar';
import { ProductSlider } from '../../components/ProductDetails/ProductSlider';
import { ProductTechSpecs } from '../../components/ProductDetails/ProductTechSpecs';
import { Phone } from '../../types/Phone';
import { PhoneDetails } from '../../types/PhoneDetails';
import { SectionTitle } from '../../components/SectionTitle';
import { ProductRecommendedSlider } from '../../components/ProductDetails/ProductRecommendedSlider';

import './ProductDetailsPage.scss';

export const ProductDetailsPage: React.FC = memo(() => {
  const [product, setProduct] = useState<Phone>();
  const [productDetails, setProductDetails] = useState<PhoneDetails>();
  const [recommendedProducts, setRecommendedProducts] = useState<Phone[]>();
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      getPhoneDetails(productId || ''),
      getRecommended(productId || ''),
    ])
      .then(([phoneDetailsRes, recommendedRes]) => {
        const { phone, phoneDetails } = phoneDetailsRes.data;

        setProduct(JSON.parse(phone));
        setProductDetails(JSON.parse(phoneDetails));
        setRecommendedProducts(recommendedRes.data);
      })
      .catch((error) => window.console.log(error))
      .finally(() => setIsLoading(false));
  }, [productId]);

  const handleProductChange = useCallback((newProductId: string) => {
    getPhoneDetails(newProductId || '')
      .then((res) => {
        const { phone, phoneDetails } = res.data;

        setProduct(() => JSON.parse(phone));
        setProductDetails(() => JSON.parse(phoneDetails));
      })
      .catch((error) => window.console.log(error));

    getRecommended(newProductId || '')
      .then((res) => setRecommendedProducts(res.data))
      .catch((error) => window.console.log(error));
  }, []);

  return (
    <div className="container">
      <Breadcrumbs />
      <BackButton />
      <Dimmer active={isLoading} inverted>
        <Loader size="medium">Loading</Loader>
      </Dimmer>
      {product && productDetails && (
        <SectionTitle>{productDetails.name}</SectionTitle>
      )}

      <div className="product-details__demo grid">
        {product && productDetails && (
          <>
            <ProductSlider
              images={productDetails.images}
              name={productDetails.name}
            />

            <ProductSidebar
              productDetails={productDetails}
              product={product}
              handleProductChange={handleProductChange}
            />
          </>
        )}
      </div>

      {product && productDetails && (
        <div className="grid">
          <ProductAbout description={productDetails.description} />
          <ProductTechSpecs
            screen={productDetails.screen}
            resolution={productDetails.resolution}
            processor={productDetails.processor}
            ram={productDetails.ram}
            capacity={productDetails.capacity}
            camera={productDetails.camera}
            zoom={productDetails.zoom}
            cell={productDetails.cell}
          />
        </div>
      )}

      {recommendedProducts && (
        <ProductRecommendedSlider
          handleProductChange={handleProductChange}
          products={recommendedProducts}
        />
      )}
    </div>
  );
});
