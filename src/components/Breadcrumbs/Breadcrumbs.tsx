import React, { Fragment, memo } from 'react';
import './Breadcrumbs.scss';
import { Link } from 'react-router-dom';

interface Props {
  path: (string | undefined)[];
}

export const Breadcrumbs: React.FC<Props> = memo(({ path }) => {
  let currentLink = '';

  const crumbs = path.map((crumb) => {
    if (crumb) {
      const preparedCrumb = (crumb[0].toUpperCase() + crumb.slice(1))
        .split('-')
        .join(' ');

      currentLink += `/${crumb}`;

      return (
        <Fragment key={crumb}>
          <div className="breadcrumbs__icon breadcrumbs__icon--arrow"></div>
          <Link
            aria-label={`click to go to the ${crumb} page`}
            className="breadcrumbs__link"
            to={currentLink}
          >
            {preparedCrumb}
          </Link>
        </Fragment>
      );
    }

    return true;
  });

  return (
    <div className="breadcrumbs page__breadcrumbs">
      <Link
        aria-label="click to go to the home page"
        title="Home page"
        to="/"
        className="breadcrumbs__link"
      >
        <div className="breadcrumbs__icon--home breadcrumbs__icon"></div>
      </Link>
      <>{crumbs}</>
    </div>
  );
});
