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
  const [phone, setPhone] = useState<PhoneDetails>();
  const { productId } = useParams();

  useEffect(() => {
    getPhoneDetails(productId || '')
      .then((res) => setPhone(res.data))
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
        {phone && <ProductSlider images={phone.images} name={phone.name} />}
      </div>
      {phone && <ProductAbout description={phone?.description} />}
    </div>
  );
};
