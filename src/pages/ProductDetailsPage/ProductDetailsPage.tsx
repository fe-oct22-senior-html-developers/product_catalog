import React, { useEffect, useState } from 'react';
import './ProductDetailsPage.scss';
import { useParams } from 'react-router-dom';
import { getPhoneDetails, getRecommended } from '../../api/requests';
import { BackButton } from '../../components/BackButton';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductAbout } from '../../components/ProductDetails/ProductAbout';
import { ProductSlider } from '../../components/ProductDetails/ProductSlider';
import { ProductTechSpecs } from '../../components/ProductDetails/ProductTechSpecs';
import { PhoneDetails } from '../../types/PhoneDetails';
import { SectionTitle } from '../../components/SectionTitle';
import { Phone } from '../../types/Phone';
import { ProductRecommendedSlider } from '../../components/ProductDetails/ProductRecommendedSlider';

export const ProductDetailsPage: React.FC = () => {
  const [productDetails, setProductDetails] = useState<PhoneDetails>();
  const [recommendedProducts, setRecommendedProducts] = useState<Phone[]>();
  const { productId } = useParams();

  useEffect(() => {
    getPhoneDetails(productId || '')
      .then((res) => {
        const { phoneDetails } = res.data;

        setProductDetails(JSON.parse(phoneDetails));
      })
      .catch((error) => window.console.log(error));

    getRecommended(productId || '')
      .then((res) => setRecommendedProducts(res.data))
      .catch((error) => window.console.log(error));
  }, []);

  return (
    <div className="container">
      <Breadcrumbs />
      <BackButton />
      <SectionTitle>{`Section title component ${productId}`}</SectionTitle>
      {productDetails && (
        <>
          <div className="product-details__demo">
            <ProductSlider
              images={productDetails.images}
              name={productDetails.name}
            />
          </div>

          <div className="product-details__wrapper">
            <ProductAbout description={productDetails?.description} />

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

          {recommendedProducts && (
            <ProductRecommendedSlider products={recommendedProducts} />
          )}
        </>
      )}
    </div>
  );
};
