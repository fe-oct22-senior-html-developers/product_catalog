import React from 'react';
import './ProductPage.scss';
import { PageTitle } from '../../components/PageTitle';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BackButton } from '../../components/BackButton';

type Props = {
  pageTitle: string;
};

export const ProductPage: React.FC<Props> = ({ pageTitle }) => {
  return (
    <div className="product-page">
      <div className="container">
        <Breadcrumbs />
        <BackButton />
        <PageTitle mixClass="product-page__title">{pageTitle}</PageTitle>
      </div>
      <div>Data amount</div>
      <div>Sorting</div>
      <div>Datalist</div>
      <div>Pagination</div>
    </div>
  );
};
