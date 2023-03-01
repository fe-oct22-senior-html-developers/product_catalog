import React, { memo } from 'react';
import './PageTitle.scss';

type Props = {
  mixClass: string;
  children: string;
};

export const PageTitle: React.FC<Props> = memo(({ mixClass, children }) => (
  <h2 className={`page-title ${mixClass}`}>{children}</h2>
));
