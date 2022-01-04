/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { IntlProvider } from 'react-intl';
import { render } from '@testing-library/react';

import LangContext from '../../context';

import LanguagePicker from '../../components/LanguagePicker/LanguagePicker';

import messages from '../../intl/messages';

const updateAppLang = jest.fn();
const appLang = 'en';

const Wraper = ({ children }) => (
  <IntlProvider locale={appLang} messages={messages.en}>
    {children}
  </IntlProvider>
);

test('Check if match with snapshot', () => {
  const header = render(
    <Wraper>
      <LangContext.Provider value={{ updateAppLang, appLang }}>
        <LanguagePicker />
      </LangContext.Provider>
    </Wraper>
  );
  expect(header).toMatchSnapshot();
});
