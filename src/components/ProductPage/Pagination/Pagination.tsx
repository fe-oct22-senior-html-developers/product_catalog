import React, { memo } from 'react';
import cn from 'classnames';
// import './Pagination.scss';
// import { useSearchParams } from 'react-router-dom';

interface Props {
  currentPage: number;
  itemsNum: number;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

export const Pagination: React.FC<Props> = memo(
  ({ currentPage, itemsNum, setPage }) => {
    const pagesNumber = Math.ceil(95 / itemsNum);

    const pages = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < pagesNumber; i++) {
      pages.push(i);
    }

    // const [searchParams] = useSearchParams();
    // const newParams = new URLSearchParams(searchParams.toString());

    // window.console.log(searchParams);

    return (
      <div className="pagination page__pagination">
        <button
          aria-label="click to go to previous page"
          type="button"
          className="pagination__button"
        >
          <div className="pagination__arrow pagination__arrow--left"></div>
        </button>
        <ul className="pagination__list">
          {pages.map((pageNumber) => (
            <li key={pageNumber}>
              <button
                aria-label={`click to go to the page ${pageNumber} of the catalog`}
                type="button"
                className={cn('pagination__item', {
                  'pagination__item--active': currentPage === pageNumber,
                })}
                onClick={() => {
                  setPage(`${pageNumber}`);
                  setTimeout(
                    () => window.scrollTo({ top: 0, behavior: 'smooth' }),
                    200,
                  );
                }}
              >
                {pageNumber}
              </button>
            </li>
          ))}
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
  },
);
