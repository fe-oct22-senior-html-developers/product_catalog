import React from 'react';
import { Phone } from '../../../../types/Phone';
import { Card } from '../../../Card';

type Props = {
  catalogItem: Phone;
};

export const CatalogItem: React.FC<Props> = ({ catalogItem }) => {
  return <Card phone={catalogItem} mixClass="" />;
};
