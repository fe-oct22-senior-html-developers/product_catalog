import React from 'react';
import { Phone } from '../../../types/Phone';
import { Card } from '../../Card';

type Props = {
  favouritesItem: Phone;
};

export const FavouritesItem: React.FC<Props> = ({ favouritesItem }) => {
  return <Card phone={favouritesItem} mixClass="" />;
};
