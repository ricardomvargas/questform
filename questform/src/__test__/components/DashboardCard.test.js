/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import DashboardCard from '../../components/DashboardCard/DashboardCard';

import { PURPLE } from '../../util/constants';

const Wraper = ({ children }) => <div>{children}</div>;

test('Check if match with snapshot', () => {
  const dasboardCard = render(
    <Wraper children={<DashboardCard skin={PURPLE} title={'loren inpsum'} content={'0'} />} />
  );
  expect(dasboardCard).toMatchSnapshot();
});
