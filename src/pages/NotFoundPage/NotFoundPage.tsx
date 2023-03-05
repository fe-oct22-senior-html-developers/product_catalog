import React from 'react';
import './NotFoundPage.scss';
import { Link } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import errorImage from '../../static/NotFoundPage/404.svg';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="container not-found-page">
      <BackButton isAlone />
      <section className="not-found-page__content">
        <div className="not-found-page__text">
          <h1 className="not-found-page__title">Sorry, this page could not be found</h1>
          <p className="not-found-page__description">
            {'The link is broken or the page no longer exists. '}
            <br className="not-found-page__break" />
            {'Go to the '}
            <Link className="not-found-page__link" to="/">homepage</Link>
            .
          </p>
        </div>
        <img src={errorImage} alt="404 error" className="not-found-page__image" />
      </section>
    </div>
  );
};
