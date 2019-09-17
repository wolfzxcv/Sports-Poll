import React from 'react';
import { shallow } from 'enzyme';
import WholePage from './WholePage';
import Board from '../Board/Board';

it('should render Board', () => {
  const wrapper = shallow(<WholePage />);
  const board = wrapper.find(Board);
  expect(board.exists()).toBe(true);
});
