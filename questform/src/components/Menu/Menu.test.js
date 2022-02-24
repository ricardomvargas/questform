/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { IntlProvider } from 'react-intl';
import { render } from '@testing-library/react';

import Menu from './Menu';

import messages from '../../intl/messages';

import { menuIcon } from '../../util/imagesPath';

const menuClick = jest.fn();
const appLinks = [
  {
    title: 'Home',
    imgId: 'imgGo',
    url: '/',
  },
  {
    title: 'Surveys',
    imgId: 'imgGo',
    url: '/surveys',
  },
  {
    title: 'Questions',
    imgId: 'imgGo',
    url: '/questions',
  },
];

const Wraper = ({ children }) => (
  <IntlProvider locale="en" messages={messages.en}>
    {children}
  </IntlProvider>
);

test('Check if match with snapshot', () => {
  const menu = render(
    <Wraper>
      <Menu menuIcon={menuIcon} menuVisible={false} onMenuClick={menuClick} appLinks={appLinks} />
    </Wraper>
  );
  expect(menu).toMatchSnapshot();
});
