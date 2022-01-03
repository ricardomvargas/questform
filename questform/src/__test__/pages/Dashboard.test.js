/**
 * @jest-environment jsdom
 */
import React from 'react';
import { IntlProvider } from 'react-intl';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import messages from '../../intl/messages';
import Dashboard from '../../pages/dashboard/Dashboard';

const Wraper = ({ children }) => (
  <IntlProvider locale="en" messages={messages.en}>
    {children}
  </IntlProvider>
);

test('Check if match with snapshot', () => {
  const dasboard = render(<Wraper children={<Dashboard />} />);
  expect(dasboard).toMatchSnapshot();
});
