import React from 'react';
import { Phone } from '../../../types/Phone';
import { Card } from '../../Card';
// import { CartItem as CartItemType } from '../../../types/CartItem';

type Props = {
  favouritesItem: Phone;
};

export const FavouritesItem: React.FC<Props> = ({ favouritesItem }) => {
  // Тут напиши функції для видалення, зменшення/збільшення кількості
  return <Card phone={favouritesItem} mixClass="" />;
};
