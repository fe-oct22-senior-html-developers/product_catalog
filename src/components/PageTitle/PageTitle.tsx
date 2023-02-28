import React from 'react';
import './PageTitle.scss';

type Props = {
  children: string;
};

export const PageTitle: React.FC<Props> = ({ children }) => (
  <h1 className="page-title">{children}</h1>
);
