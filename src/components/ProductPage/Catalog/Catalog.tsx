import React, { memo } from 'react';
import { Phone } from '../../../types/Phone';
import { CatalogItem } from './CatalogItem';
import { CatalogList } from './CatalogList';
import './Catalog.scss';

interface Props {
  phones: Phone[];
}

export const Catalog: React.FC<Props> = memo(({ phones }) => {
  return (
    <section className="catalog page__catalog">
      <CatalogList>
        {phones.map((catalogItem) => (
          <li className="catalog__list-item" key={catalogItem.itemId}>
            <CatalogItem catalogItem={catalogItem} />
          </li>
        ))}
      </CatalogList>
    </section>
  );
});
