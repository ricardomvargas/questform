import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';

import SiteMap from '../../components/SiteMap/SiteMap';

import '../../setupTest';

const options = [
  {
    key: 1,
    title: 'Page 1',
    description: 'This is page 1',
    route: '/page1',
  },
  {
    key: 2,
    title: 'Page 1',
    description: 'This is page 1',
    route: '/page2',
  },
  {
    key: 3,
    title: 'Page 1',
    description: 'This is page 1',
    route: '/page3',
  },
];

it('Renders without crashe', () => {
  shallow(<SiteMap options={options} />);
});

it('Check options', () => {
  const siteMap = mount(<SiteMap options={options} />);
  expect(siteMap.props().options).toEqual(options);
});
