import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../components/Button/Button';

import '../../setupTest';

import { SAVE, PUBLISH, CANCEL, DELETE, FINISH, LOGIN } from '../../util/constants';

it('Renders without crashe', () => {
  shallow(<Button name={'save'} text={'Save'} skin={SAVE} />);
});

it('Renders text inside button', () => {
  const button = shallow(<Button name={'save'} text={'Save'} skin={SAVE} />);
  const buttonText = 'Save';
  expect(button.contains(buttonText)).toEqual(true);
});
