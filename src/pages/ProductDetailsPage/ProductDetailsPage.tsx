import React, { useEffect, useState } from 'react';
import './ProductDetailsPage.scss';
import { useParams } from 'react-router-dom';
import { getPhoneDetails } from '../../api/requests';
// import { getPhoneDetails, getRecommended } from '../../api/requests';
import { BackButton } from '../../components/BackButton';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductAbout } from '../../components/ProductDetails/ProductAbout';
import { ProductSlider } from '../../components/ProductDetails/ProductSlider';
import { ProductTechSpecs } from '../../components/ProductDetails/ProductTechSpecs';
import { PhoneDetails } from '../../types/PhoneDetails';
import { SectionTitle } from '../../components/SectionTitle';

export const ProductDetailsPage: React.FC = () => {
  const [product, setProduct] = useState<PhoneDetails>();
  const { productId } = useParams();

  useEffect(() => {
    getPhoneDetails(productId || '')
      .then((res) => {
        const { phoneDetails } = res.data;

        setProduct(JSON.parse(phoneDetails));
      })
      .catch((error) => window.console.log(error));

    // getRecommended(productId || '')
    //   .then((res) => window.console.log(res.data))
    //   .catch((error) => window.console.log(error));
  }, []);

  return (
    <div className="container">
      <Breadcrumbs />
      <BackButton />
      <SectionTitle>{`Section title component ${productId}`}</SectionTitle>
      {product && (
        <>
          <div className="product-details__demo">
            <ProductSlider images={product.images} name={product.name} />
          </div>

          <div className="product-details__wrapper">
            <ProductAbout description={product?.description} />

            <ProductTechSpecs
              screen={product.screen}
              resolution={product.resolution}
              processor={product.processor}
              ram={product.ram}
              capacity={product.capacity}
              camera={product.camera}
              zoom={product.zoom}
              cell={product.cell}
            />
          </div>
        </>
      )}
    </div>
  );
};
