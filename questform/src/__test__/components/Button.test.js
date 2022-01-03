/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Button from '../../components/Button/Button';

import { SAVE, PUBLISH, CANCEL, DELETE, FINISH, LOGIN } from '../../util/constants';

const Wraper = ({ children }) => <div>{children}</div>;

test('Check if match with snapshot', () => {
  const button = render(<Wraper children={<Button name="default" text="Default" />} />);
  expect(button).toMatchSnapshot();
});

test('Check if Button render with default skin', () => {
  render(<Wraper children={<Button name="default" text="Default" />} />);
  const button = screen.getByRole('button', { name: /default/i });
  expect(button).toBeDefined();
  expect(button).toHaveClass('btn-save');
});

test('Check if Button render with save skin', () => {
  render(<Wraper children={<Button name="save" text="Save" skin={SAVE} />} />);
  const button = screen.getByRole('button', { name: /save/i });
  expect(button).toBeDefined();
  expect(button).toHaveClass('btn-save');
});

test('Check if Button render with publish skin', () => {
  render(<Wraper children={<Button name="publish" text="Publish" skin={PUBLISH} />} />);
  const button = screen.getByRole('button', { name: /publish/i });
  expect(button).toBeDefined();
  expect(button).toHaveClass('btn-publish');
});

test('Check if Button render with cancel skin', () => {
  render(<Wraper children={<Button name="cancel" text="Cancel" skin={CANCEL} />} />);
  const button = screen.getByRole('button', { name: /cancel/i });
  expect(button).toBeDefined();
  expect(button).toHaveClass('btn-cancel');
});

test('Check if Button render with delete skin', () => {
  render(<Wraper children={<Button name="delete" text="Delete" skin={DELETE} />} />);
  const button = screen.getByRole('button', { name: /delete/i });
  expect(button).toBeDefined();
  expect(button).toHaveClass('btn-cancel');
});

test('Check if Button render with finish skin', () => {
  render(<Wraper children={<Button name="Finish" text="Finish" skin={FINISH} />} />);
  const button = screen.getByRole('button', { name: /Finish/i });
  expect(button).toBeDefined();
  expect(button).toHaveClass('btn-finish');
});

test('Check if Button render with login skin', () => {
  render(<Wraper children={<Button name="login" text="Login" skin={LOGIN} />} />);
  const button = screen.getByRole('button', { name: /login/i });
  expect(button).toBeDefined();
  expect(button).toHaveClass('btn-login');
});

test('Check if Button has submit type', () => {
  render(<Wraper children={<Button name="submit" text="Submit" isSubmit />} />);
  const button = screen.getByRole('button', { name: /submit/i });
  expect(button).toHaveAttribute('type', 'submit');
});
