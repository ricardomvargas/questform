import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';

import { TDataTablePaginator } from './TDataTablePaginator';

import { getIntegerDivision } from '../../util/util';

const DataTablePaginator = ({
  totalItens,
  itensPerPage,
  pageSectionsSize,
  currentPage,
  setCurrentPage,
}: TDataTablePaginator) => {
  const intl = useIntl();
  const [pageSection, setPageSection] = useState<number[]>([]);
  const [totalPages] = useState(getIntegerDivision(totalItens, itensPerPage));

  const updatePageSection = () => {
    if (totalPages > 1) {
      if (pageSection?.length <= 0) {
        createPageSection(1, totalPages);
      } else {
        if (!pageSection.find((s) => s === currentPage)) {
          if (currentPage) createPageSection(currentPage, totalPages);
        }
      }
    } else {
      setPageSection([]);
    }
  };

  useEffect(() => {
    updatePageSection();
    // TODO: Review this to remove the eslint-disable
    // eslint-disable-next-line
  }, [currentPage]);

  const createPageSection = (initCounter: number, totalPages: number) => {
    let sectionCounter = 1;
    let section = [];

    for (let i = initCounter; i <= totalPages; i++) {
      if (i < totalPages && sectionCounter < pageSectionsSize) {
        section.push(i);
        sectionCounter++;
      } else if (i === totalPages || sectionCounter === pageSectionsSize) {
        section.push(i);
        break;
      }
    }

    setPageSection(section);
  };

  const buildBackButton = () => {
    if (pageSection?.length > 0) {
      if (pageSection[0] > pageSectionsSize) {
        const backButtonValue = pageSection[0] - pageSectionsSize;
        return (
          <li>
            <button
              onClick={() => {
                if (setCurrentPage) setCurrentPage(backButtonValue);
              }}
            >
              {intl.formatMessage({ id: 'paginationBack' })}
            </button>
          </li>
        );
      } else {
        return null;
      }
    }
    return null;
  };

  const buildNextButton = () => {
    if (pageSection?.length > 0) {
      if (pageSection[0] + pageSectionsSize < totalPages) {
        const nextButtonValue = pageSection[0] + pageSectionsSize;
        return (
          <li>
            <button
              onClick={() => {
                if (setCurrentPage) setCurrentPage(nextButtonValue);
              }}
            >
              {intl.formatMessage({ id: 'paginationNext' })}
            </button>
          </li>
        );
      } else {
        return null;
      }
    }
    return null;
  };

  const buildPageButton = () =>
    /** #TODO: Add key in the <li> */
    pageSection.map((page) => (
      <li style={{ marginRight: '5px' }}>
        <button
          className={currentPage === page ? 'current-page' : ''}
          onClick={() => {
            if (setCurrentPage) setCurrentPage(page);
          }}
        >
          {page}
        </button>
      </li>
    ));

  const buildPaginator = () =>
    totalPages > 1 ? (
      <div className="data-table-footer">
        <ul>
          {buildBackButton()}
          {pageSection ? buildPageButton() : null}
          {buildNextButton()}
        </ul>
      </div>
    ) : null;

  return buildPaginator();
};

export default DataTablePaginator;
