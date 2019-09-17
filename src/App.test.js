import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import WholePage from './components/WholePage/WholePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render WholePage', () => {
  const wrapper = shallow(<App />);
  const wholePage = wrapper.find(WholePage);
  expect(wholePage.exists()).toBe(true);
});
