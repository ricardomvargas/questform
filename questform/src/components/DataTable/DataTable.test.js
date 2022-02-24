/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { IntlProvider } from 'react-intl';
import { render } from '@testing-library/react';

import DataTable from './DataTable';

import messages from '../../intl/messages';
import { mockSurveysList } from '../../__test__/mocks/mocks';

const handleSearchAction = jest.fn();
const handleFilterAction = jest.fn();
const customOptionsAction = jest.fn();
const setCurrentSurveysPage = jest.fn();

const moreOptions = [
  {
    title: 'Edit',
    url: '/surveys/edit',
  },
  {
    title: 'View',
    url: '/surveys/view',
  },
  {
    title: 'Custom',
    url: '#',
    onClick: customOptionsAction,
  },
];

const Wraper = ({ children }) => (
  <IntlProvider locale="en" messages={messages.en}>
    {children}
  </IntlProvider>
);

test('Check if match with snapshot', () => {
  const header = render(
    <Wraper>
      <DataTable
        dataList={mockSurveysList.list}
        totalItens={mockSurveysList.totalItens}
        listTitle="Surveys"
        newItemUrl="/surveys/new"
        searchAction={handleSearchAction}
        filterAction={handleFilterAction}
        moreOptions={moreOptions}
        currentPage={1}
        setCurrentPage={setCurrentSurveysPage}
      />
    </Wraper>
  );
  expect(header).toMatchSnapshot();
});
