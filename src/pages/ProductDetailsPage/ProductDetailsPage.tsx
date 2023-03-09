import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPhoneDetails } from '../../api/requests';
// import { getPhoneDetails, getRecommended } from '../../api/requests';
import { BackButton } from '../../components/BackButton';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductAbout } from '../../components/ProductDetails/ProductAbout';
import { ProductSlider } from '../../components/ProductDetails/ProductSlider';
import { PhoneDetails } from '../../types/PhoneDetails';

export const ProductDetailsPage: React.FC = () => {
  const [product, setProduct] = useState<PhoneDetails>();
  const { productId } = useParams();

  useEffect(() => {
    getPhoneDetails(productId || '')
      .then((res) => setProduct(res.data))
      .catch((error) => window.console.log(error));

    // getRecommended(productId || '')
    //   .then((res) => window.console.log(res.data))
    //   .catch((error) => window.console.log(error));
  }, []);

  return (
    <div className="container">
      <Breadcrumbs />
      <BackButton />
      <div>{`Section title component ${productId}`}</div>
      <div className="product-details__demo">
        {product && <ProductSlider images={product.images} name={product.name} />}
      </div>
      {product && <ProductAbout description={product?.description} />}
    </div>
  );
};
