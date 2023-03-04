import React from 'react';
import './ProductPage.scss';
import { PageTitle } from '../../components/PageTitle';
import { Breadcrumbs } from '../../components/Breadcrumbs';

type Props = {
  pageTitle: string;
};

export const ProductPage: React.FC<Props> = ({ pageTitle }) => {
  return (
    <div className="product-page">
      <Breadcrumbs />
      <div className="container">
        <PageTitle mixClass="product-page__title">{pageTitle}</PageTitle>
      </div>
      <div>Data amount</div>
      <div>Sorting</div>
      <div>Datalist</div>
      <div>Pagination</div>
    </div>
  );
};
