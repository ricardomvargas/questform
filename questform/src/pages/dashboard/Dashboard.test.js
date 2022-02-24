/**
 * @jest-environment jsdom
 */
import React from 'react';
import { IntlProvider } from 'react-intl';
import '@testing-library/jest-dom';
import { render, act } from '@testing-library/react';
import axios from 'axios';

import messages from '../../intl/messages';
import Dashboard from './Dashboard';

import { getLastSurveys } from '../../http/surveys';

jest.mock('axios');

const Wraper = ({ children }) => (
  <IntlProvider locale="en" messages={messages.en}>
    {children}
  </IntlProvider>
);

test('Check if match with snapshot', async () => {
  axios.get.mockResolvedValue({
    data: {
      list: [
        {
          idSurvey: 18,
          title: 'Sed sodales congue consequat',
          idSurveyStatus: 2,
          publicTitle:
            'In tempor elit quis viverra tristique. Nullam auctor ultricies condimentum. Donec venenatis vel neque in porta. Mauris lacinia vitae nisl vitae tristique.',
          publicDescription:
            'Nam mattis, neque eget commodo viverra, neque dolor bibendum lectus, finibus dignissim orci purus quis arcu. Praesent mattis pellentesque arcu. Vivamus mattis velit vitae risus bibendum, sed gravida arcu commodo. Proin eget sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
          consclusionDescription:
            'Quisque dapibus nunc arcu, non egestas arcu volutpat at. Phasellus vestibulum posuere elit sit amet consectetur. Nulla congue vel ipsum vel mattis. Proin laoreet ante vitae orci vestibulum, eu faucibus mauris imperdiet. Etiam ultricies ligula quis maximus blandit. Nulla ut nunc eu lectus euismod scelerisque. Donec euismod varius nibh quis facilisis.',
          createDate: '2021-03-21 16:20:51',
          active: 1,
          totalQuestions: 0,
          results: 18,
        },
      ],
      total: 18,
    },
  });

  const dasboard = render(<Wraper children={<Dashboard />} />);
  /**
   * About act:
   * If the code bellow will not be wraped in the act(), React will be giving a warning in the console saying that the code should
   * be wrapped with act. This happen because after the promisse be resolved, something in the page will be updated and the test
   * need to tell React about that, so the request must be wrapped in act();
   */
  await act(() => getLastSurveys());
  expect(dasboard).toMatchSnapshot();
});
