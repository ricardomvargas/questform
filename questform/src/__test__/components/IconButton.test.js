/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import IconButton from '../../components/IconButton/IconButton';

import { CLOSE } from '../../util/constants';

const buttonClick = jest.fn();

const Wraper = ({ children }) => <div>{children}</div>;

test('Check if match with snapshot', () => {
  const dasboardCard = render(
    <Wraper
      children={<IconButton buttonType={CLOSE} title="Add new" onClickAction={buttonClick} />}
    />
  );
  expect(dasboardCard).toMatchSnapshot();
});
