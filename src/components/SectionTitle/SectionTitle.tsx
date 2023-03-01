import React from 'react';
import './SectionTitle.scss';

type Props = {
  children: string;
};

export const SectionTitle: React.FC<Props> = ({ children }) => (
  <h3 className="section-title">{children}</h3>
);
