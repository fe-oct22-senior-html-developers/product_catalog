import React, { memo } from 'react';
import cn from 'classnames';
import './Pagination.scss';

interface Props {
  currentPage: number;
  itemsNum: number;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  phonesAmount: number;
}

export const Pagination: React.FC<Props> = memo(
  ({
    currentPage, itemsNum, setPage, phonesAmount,
  }) => {
    const pagesNumber = Math.ceil(phonesAmount / itemsNum);

    const pages = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= pagesNumber; i++) {
      pages.push(i);
    }

    const handleBackClick = () => {
      setPage(`${currentPage - 1}`);
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
    };

    const handleForwardClick = () => {
      setPage(`${currentPage + 1}`);
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
    };

    return (
      <div className="pagination page__pagination">
        <button
          aria-label="click to go to previous page"
          type="button"
          className={cn('pagination__arrow-button', {
            'pagination__arrow-button--disabled': currentPage === 1,
          })}
          onClick={handleBackClick}
        >
          <div className="pagination__arrow-icon pagination__arrow-icon--left"></div>
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
          className={cn('pagination__arrow-button', {
            'pagination__arrow-button--disabled': currentPage === pagesNumber,
          })}
          onClick={handleForwardClick}
        >
          <div className="pagination__arrow-icon pagination__arrow-icon--right"></div>
        </button>
      </div>
    );
  },
);
