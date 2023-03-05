import React from 'react';
import './CartPage.scss';
import { PageTitle } from '../../components/PageTitle';
import { BackButton } from '../../components/BackButton';

type Props = {
  pageTitle: string;
};

export const CartPage: React.FC<Props> = ({ pageTitle }) => {
  // const isAlone = true;

  return (
    <div className="cart-page">
      <div className="container">
        <BackButton isAlone />
        <PageTitle mixClass="cart-page__title">{pageTitle}</PageTitle>
      </div>
      <div>Products</div>
    </div>
  );
};
