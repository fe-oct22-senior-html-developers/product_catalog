import React, { useEffect, useState } from 'react';
import './ProductPage.scss';
import { PageTitle } from '../../components/PageTitle';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CustomSelect } from '../../components/ProductPage/CustomSelect';
import { SortBy, ItemsNum } from '../../types/CustomSelect';
import { Phone } from '../../types/Phone';
import { getPhonesWithPagination, getPhonesAmount } from '../../api/requests';
import { Catalog } from '../../components/ProductPage/Catalog';
import { Pagination } from '../../components/ProductPage/Pagination';

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

const sortByQueries = {
  'Name: A - Z': 'alph',
  Newest: 'newest',
  Oldest: 'oldest',
  'Price: Lowest first': 'priceLowest',
  'Price: Highest first': 'priceHighest',
};

const itemsNumOptions: ItemsNum[] = ['8', '16', '32', '64'];

export const ProductPage: React.FC<Props> = ({ pageTitle }) => {
  const [sortBy, setSortBy] = useState<SortBy>('Name: A - Z');
  const [itemsNum, setItemsNum] = useState<ItemsNum>('16');
  const [page, setPage] = useState('1');
  const [phonesAmount, setPhonesAmount] = useState(0);

  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getPhonesAmount()
      .then((res) => res.data)
      .then(setPhonesAmount);
  }, []);

  useEffect(() => {
    getPhonesWithPagination(sortByQueries[sortBy], itemsNum, page)
      .then((res) => res.data)
      .then(setPhones);
  }, [sortBy, itemsNum, page]);

  return (
    <div className="product-page">
      <div className="container">
        <Breadcrumbs />
        <PageTitle mixClass="product-page__title">{pageTitle}</PageTitle>
        <p className="product-page__amount">{`${phonesAmount} models`}</p>
        <div className="product-page__filters">
          <CustomSelect
            title="Sort by"
            list={sortByOptions}
            current={sortBy}
            mixClass="custom-select--sort-by"
            updater={setSortBy}
            setPage={setPage}
          />
          <CustomSelect
            title="Items on page"
            list={itemsNumOptions}
            current={itemsNum}
            mixClass="custom-select--items-num"
            updater={setItemsNum}
            setPage={setPage}
          />
        </div>

        <Catalog phones={phones} />
      </div>

      <Pagination
        setPage={setPage}
        currentPage={+page}
        itemsNum={+itemsNum}
        phonesAmount={phonesAmount}
      />
    </div>
  );
};
