import React from 'react';
import { useParams } from 'react-router-dom';
// import { getPhoneDetails, getRecommended } from '../../api/requests';
import { BackButton } from '../../components/BackButton';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams();

  // useEffect(() => {
  //   getPhoneDetails(productId || '')
  //     .then((res) => window.console.log(res.data))
  //     .catch((error) => window.console.log(error));

  //   getRecommended(productId || '')
  //     .then((res) => window.console.log(res.data))
  //     .catch((error) => window.console.log(error));
  // }, []);

  return (
    <div className="container">
      <Breadcrumbs />
      <BackButton />
      <div>{`Section title component ${productId}`}</div>
    </div>
  );
};
