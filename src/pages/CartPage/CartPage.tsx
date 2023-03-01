import React from 'react';
import './CartPage.scss';
import { PageTitle } from '../../components/PageTitle';

type Props = {
  pageTitle: string;
};

export const CartPage: React.FC<Props> = ({ pageTitle }) => {
  return (
    <div className="cart-page">
      <div>Breadcrumbs</div>
      <PageTitle mixClass="cart-page__title">{pageTitle}</PageTitle>
      <div>Products</div>
    </div>
  );
};
