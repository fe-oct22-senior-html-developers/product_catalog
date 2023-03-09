import React, { useEffect, useState } from 'react';
import './ProductPage.scss';
import { PageTitle } from '../../components/PageTitle';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CustomSelect } from '../../components/ProductPage/CustomSelect';
import { SortBy, ItemsNum } from '../../types/CustomSelect';

type Props = {
  pageTitle: string;
};

const sortByOptions: SortBy[] = [
  'Name: A - Z',
  'Newest',
  'Oldest',
  'Price: Lowest first',
  'Price: Highest first',
];

const itemsNumOptions: ItemsNum[] = ['8', '16', '32', '64'];

export const ProductPage: React.FC<Props> = ({ pageTitle }) => {
  const [sortBy, setSortBy] = useState<SortBy>('Name: A - Z');
  const [itemsNum, setItemsNum] = useState<ItemsNum>('16');

  useEffect(() => {
    window.console.log(sortBy, itemsNum);
  }, [sortBy, itemsNum]);

  return (
    <div className="product-page">
      <div className="container">
        <Breadcrumbs />
        <PageTitle mixClass="product-page__title">{pageTitle}</PageTitle>
        <p className="product-page__amount">{`${95} models`}</p>
        <div className="product-page__filters">
          <CustomSelect
            title="Sort by"
            list={sortByOptions}
            current={sortBy}
            mixClass="custom-select--sort-by"
            updater={setSortBy}
          />
          <CustomSelect
            title="Items on page"
            list={itemsNumOptions}
            current={itemsNum}
            mixClass="custom-select--items-num"
            updater={setItemsNum}
          />
        </div>
      </div>
      <div>Sortingdfjbvdfvbdoufvbdfiuvbdifbvvbdfbvdifbvidfbvidfbuivdf</div>
      <div>Datalist</div>
      <div>Pagination</div>
    </div>
  );
};
