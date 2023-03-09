import React, { useEffect, useState } from 'react';
import './ShopByCategory.scss';
import { SectionTitle } from '../../SectionTitle';
import { CategoryCard } from './CategoryCard';

// Images
import PhonesImg from '../../../static/categories/category__phones.jpg';
import TabletsImg from '../../../static/categories/category__tablets.jpg';
import AccessoriesImg from '../../../static/categories/category__accessories.jpg';
import { getPhonesAmount } from '../../../api/requests';

export const ShopByCategory: React.FC = () => {
  const [phonesAmount, setPhonesAmount] = useState(0);

  useEffect(() => {
    getPhonesAmount()
      .then((res) => res.data)
      .then(setPhonesAmount);
  }, []);

  return (
    <section className="shop-by-category container">
      <SectionTitle>Shop by category</SectionTitle>

      <div className="shop-by-category__categories grid">
        <CategoryCard
          link="/phones"
          gridClasses="grid__item--tablet_1-4 grid__item--desktop_1-8"
          image={PhonesImg}
          title="Mobile phones"
          amount={+phonesAmount}
        />
        <CategoryCard
          link="/tablets"
          gridClasses="grid__item--tablet_5-8 grid__item--desktop_9-16"
          image={TabletsImg}
          title="Tablets"
          amount={24}
        />
        <CategoryCard
          link="/accessories"
          gridClasses="grid__item--tablet_9-12 grid__item--desktop_17-24"
          image={AccessoriesImg}
          title="Accessories"
          amount={100}
        />
      </div>
    </section>
  );
};
