/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, getByRole } from '@testing-library/react';

const BaseComp = () => (
  <div>
    <button disabled>Click me</button>
  </div>
);

test('testing baisc render', () => {
  render(<BaseComp />);
  const btn = screen.getByRole('button');
  expect(btn).toHaveTextContent('Click me');
});

test('testing disabled status', () => {
  render(<BaseComp />);
  const btn = screen.getByRole('button');
  expect(btn).toBeDisabled();
});
