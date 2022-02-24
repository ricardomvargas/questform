/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import SurveyStatus from './SurveyStatus';

const Wraper = ({ children }) => <div>{children}</div>;

test('Check if match with snapshot', () => {
  const surveyStatus = render(
    <Wraper>
      <SurveyStatus status="online" />
    </Wraper>
  );
  expect(surveyStatus).toMatchSnapshot();
});
