import React, { Fragment, memo } from 'react';
import './Breadcrumbs.scss';
import { Link, useLocation } from 'react-router-dom';

export const Breadcrumbs: React.FC = memo(() => {
  const location = useLocation();

  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      const preparedCrumb = crumb[0].toUpperCase() + crumb.slice(1);

      currentLink += `/${crumb}`;

      return (
        <Fragment key={crumb}>
          <div className="breadcrumbs__arrow-icon"></div>
          <Link
            aria-label={`click to go to the ${crumb} page`}
            className="breadcrumbs__link"
            to={currentLink}
          >
            {preparedCrumb}
          </Link>
        </Fragment>
      );
    });

  return (
    <div className="container breadcrumbs page__breadcrumbs">
      <Link
        aria-label="click to go to the home page"
        title="Home page"
        to="/"
        className="breadcrumbs__link"
      >
        <div className="breadcrumbs__home-icon"></div>
      </Link>
      <>{crumbs}</>
    </div>
  );
});
