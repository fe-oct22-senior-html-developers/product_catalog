import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './Pagination.scss';

export const Pagination: React.FC = memo(() => {
  return (
    <div className="pagination">
      <button
        aria-label="click to go to previous page"
        type="button"
        className="pagination__button"
      >
        <div className="pagination__arrow pagination__arrow--left"></div>
      </button>
      <ul className="pagination__list">
        <li>
          <Link
            to="/"
            className="pagination__item"
          >
            1
          </Link>
        </li>
        {/* {paginationPages.map((page) => (
          <li key={page}>
            <Link
              className={cn(styles.pagination__item, {
                [styles.pagination__item__chosen]: currentPage === page,
              })}
              to={{
                search: handleSearchParamsUpdate(page.toString()),
              }}>
              <p
                className={cn(styles.pagination__link, {
                  [styles.pagination__link__chosen]: currentPage === page,
                })}>
                {page}
              </p>
            </Link>
          </li>
        ))}

        <ArrowRight handleSearchParamsUpdate={handleSearchParamsUpdate} /> */}
      </ul>
      <button
        aria-label="click to go to the next page"
        type="button"
        className="pagination__button"
      >
        <div className="pagination__arrow pagination__arrow--right"></div>
      </button>
    </div>
  );
});
