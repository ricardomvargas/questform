/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import SiteMap from './SiteMap';

const siteMapOptions = [
  {
    title: 'Home',
    description: 'Home',
    route: '/',
  },
];

const Wraper = ({ children }) => <div>{children}</div>;

test('Check if match with snapshot', () => {
  const siteMap = render(
    <Wraper>
      <SiteMap options={siteMapOptions} />
    </Wraper>
  );
  expect(siteMap).toMatchSnapshot();
});
