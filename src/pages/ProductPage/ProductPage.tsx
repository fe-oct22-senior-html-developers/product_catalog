import React from 'react';
import { PageTitle } from '../../components/PageTitle';

type Props = {
  pageTitle: string;
};

export const ProductPage: React.FC<Props> = ({ pageTitle }) => {
  return (
    <>
      <div>Breadcrumbs</div>
      <PageTitle>{pageTitle}</PageTitle>
      <div>Data amount</div>
      <div>Sorting</div>
      <div>Datalist</div>
      <div>Pagination</div>
    </>
  );
};
