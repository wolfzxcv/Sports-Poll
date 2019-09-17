import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';

it('should contain these classes', () => {
  const wrapper = shallow(<Board />);
  expect(wrapper.exists('.category')).toBe(true);
  expect(wrapper.exists('.status-and-country')).toBe(true);
  expect(wrapper.exists('.status')).toBe(true);
  expect(wrapper.exists('.country')).toBe(true);
  expect(wrapper.exists('.group')).toBe(true);
  expect(wrapper.exists('.teams')).toBe(true);
  expect(wrapper.exists('.border-right')).toBe(true);
  expect(wrapper.exists('.team-name')).toBe(true);
  expect(wrapper.exists('.draw')).toBe(true);
  expect(wrapper.exists('.odds')).toBe(true);
  expect(wrapper.exists('.one')).toBe(true);
  expect(wrapper.exists('.three')).toBe(true);
});
