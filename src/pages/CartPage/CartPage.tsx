import React from 'react';

import './CartPage.scss';
import { PageTitle } from '../../components/PageTitle';
import { Cart } from '../../components/CartPage/Cart';
import { BackButton } from '../../components/BackButton';

type Props = {
  pageTitle: string;
};

export const CartPage: React.FC<Props> = ({ pageTitle }) => {
  return (
    <div className="cart-page">
      <div>Breadcrumbs</div>
      <div className="container">
        <BackButton isAlone />
        <PageTitle mixClass="cart-page__title">{pageTitle}</PageTitle>
      </div>
      <Cart />
    </div>
  );
};
