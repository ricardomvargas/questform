import React, { useState, useRef, useEffect } from 'react';
import { useIntl } from 'react-intl';

import DataTablePaginator from './DataTablePaginator';
import IconButton from '../IconButton';
import SurveyStatus from '../SurveyStatus';

import {
  CLOSE,
  SEARCH,
  FILTER,
  ADD,
  RED,
  DELETE_ITEM,
} from '../../util/constants';

const DataTable = ({
  listTitle,
  dataList,
  totalItens,
  currentPage,
  setCurrentPage,
  hideTitle,
  moreOptions,
  hideMoreOptions,
  filterAction,
  searchAction,
  newItemAction,
  newItemUrl,
  deleteAction,
  itensPerPage,
  sectionSize,
}: ComponentsProps.DataTable) => {
  const DEFAULT_ITENS_PER_PAGE = 10;
  const DEFAULT_SECTION_SIZE = 3;
  const [searchTextVisible, setSearchTextVisible] = useState(false);
  const [searchTextButtonVisible, setSearchTextButtonVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const moreOptionsRef = useRef<HTMLDivElement[]>([]);
  const intl = useIntl();
  const [openedOptions, setOpenedOptions] = useState({
    id: 0,
    display: false,
  });

  const getItensPerPage = () => itensPerPage ?? DEFAULT_ITENS_PER_PAGE;

  const getSectionSize = () => sectionSize ?? DEFAULT_SECTION_SIZE;

  const handlerClickOutside = (e: MouseEvent) => {
    if (
      !moreOptionsRef?.current?.find((ref: HTMLDivElement) =>
        ref?.contains(e?.target as Node),
      )
    ) {
      setOpenedOptions({ id: 0, display: false });
    }
  };

  useEffect(() => {
    document.addEventListener('click', handlerClickOutside, true);
    return () =>
      document.removeEventListener('click', handlerClickOutside, true);
  }, []);

  const handleSearchTextVisibility = () => {
    setSearchText('');

    /* Delay the search button visibility change until the search input
     * transition animation is finished.*/
    if (!searchTextButtonVisible === false) {
      setTimeout(() => {
        setSearchTextButtonVisible(!searchTextButtonVisible);
      }, 500);
    } else {
      setSearchTextButtonVisible(!searchTextButtonVisible);
    }

    setSearchTextVisible(!searchTextVisible);

    /** Delay the set focus in the search input until the transition
     * animation if finished. */
    setTimeout(() => {
      document.getElementById('data-table-search')?.focus();
    }, 500);
  };

  const handleSearchTextAction = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearchText(value);
    if (searchAction) searchAction(value);
  };

  const handleFilterAction = () => {
    if (filterAction) filterAction();
  };

  const handleAddNewItemAction = () => {
    if (newItemAction) newItemAction();
  };

  const handleDeleteItemAction = () => {
    if (deleteAction) deleteAction();
  };

  const handleMoreOptionsAction = (id: number) => {
    if (id === openedOptions.id) setOpenedOptions({ id: 0, display: false });
    else setOpenedOptions({ id: id, display: true });
  };

  const buildContentStyle = () =>
    hideTitle ? 'data-table-content-no-title' : 'data-table-content';

  return (
    <div className="data-table">
      {hideTitle ? null : (
        <div className="page-header">
          <h1>{listTitle}</h1>
          <div className="page-header-actions">
            {searchAction ? (
              <>
                <input
                  id="data-table-search"
                  type="text"
                  name="data-table-search"
                  onChange={handleSearchTextAction}
                  value={searchText}
                  disabled={!searchTextVisible}
                  className={
                    searchTextVisible
                      ? 'input-search-visible'
                      : 'input-search-hide '
                  }
                />
                {searchTextButtonVisible ? (
                  <IconButton
                    buttonType={CLOSE}
                    title={`${intl.formatMessage({
                      id: 'dataNew',
                    })} ${listTitle}`}
                    onClickAction={handleSearchTextVisibility}
                  />
                ) : (
                  <IconButton
                    buttonType={SEARCH}
                    title={`${intl.formatMessage({
                      id: 'dataSearch',
                    })} ${listTitle}`}
                    onClickAction={handleSearchTextVisibility}
                  />
                )}
              </>
            ) : null}
            {filterAction ? (
              <IconButton
                buttonType={FILTER}
                title={`${intl.formatMessage({
                  id: 'dataFilter',
                })} ${listTitle}`}
                onClickAction={handleFilterAction}
              />
            ) : null}
            {newItemUrl ? (
              <IconButton
                buttonType={ADD}
                title={`${intl.formatMessage({
                  id: 'dataNew',
                })} ${listTitle}`}
                url={newItemUrl}
              />
            ) : (
              <IconButton
                buttonType={ADD}
                title={`${intl.formatMessage({
                  id: 'dataNew',
                })} ${listTitle}`}
                onClickAction={handleAddNewItemAction}
              />
            )}
          </div>
        </div>
      )}
      <ul className={buildContentStyle()}>
        {dataList?.length > 0 ? (
          dataList.map((data, index) => (
            <li className="data-item" key={data.id}>
              {data?.status ? (
                <div className="item-status">
                  <SurveyStatus status={data.status} />
                </div>
              ) : null}
              <div className="item-text">
                <span>{data.mainContent}</span>
                {data?.subContent ? (
                  <span className="sub-text">{data?.subContent}</span>
                ) : null}
              </div>
              {hideMoreOptions === undefined || hideMoreOptions === false ? (
                deleteAction || moreOptions ? (
                  <div
                    className="more-options"
                    ref={(el) =>
                      (moreOptionsRef.current[index] = el as HTMLDivElement)
                    }
                  >
                    {moreOptions ? (
                      <div className="options">
                        <IconButton
                          buttonType="moreOptionsHorizontal"
                          color="dark"
                          onClickAction={() => handleMoreOptionsAction(data.id)}
                        />
                        {data.id === openedOptions.id &&
                        openedOptions.display ? (
                          <ul>
                            {moreOptions.map((option) => {
                              const onClick = option?.onClick ?? null;
                              return (
                                <li key={`${option.title}-${data.id}`}>
                                  {onClick ? (
                                    <a
                                      href={option.url}
                                      onClick={() => onClick(data.id)}
                                    >
                                      {option.title}
                                    </a>
                                  ) : (
                                    <a
                                      href={option.url.replace(
                                        ':id',
                                        data.id as unknown as string,
                                      )}
                                    >
                                      {option.title}
                                    </a>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        ) : null}
                      </div>
                    ) : deleteAction ? (
                      <IconButton
                        buttonType={DELETE_ITEM}
                        color={RED}
                        title={`${intl.formatMessage({
                          id: 'dataDelete',
                        })} ${listTitle}`}
                        onClickAction={handleDeleteItemAction}
                      />
                    ) : null}
                  </div>
                ) : null
              ) : null}
            </li>
          ))
        ) : (
          <li>{intl.formatMessage({ id: 'listEmpty' })}</li>
        )}
      </ul>
      {currentPage && setCurrentPage ? (
        totalItens > getItensPerPage() ? (
          <DataTablePaginator
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalItens={totalItens}
            itensPerPage={getItensPerPage()}
            pageSectionsSize={getSectionSize()}
          />
        ) : null
      ) : null}
    </div>
  );
};

export default DataTable;
