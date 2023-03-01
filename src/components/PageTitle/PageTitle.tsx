import React, { memo } from 'react';
import './PageTitle.scss';

type Props = {
  children: string;
};

export const PageTitle: React.FC<Props> = memo(({ children }) => (
  <h2 className="page-title">{children}</h2>
));
