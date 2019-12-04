import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Navbar';
import {shallow} from 'enzyme';

const setUp = (props = {}) => {
  const component = shallow(<Navbar {...props} />);
  return component;
};

describe('NavBar Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('renders without crashing', () => {
    const wrapper = component.find('nav');
    expect(wrapper.length).toBe(1);
  });

  it('contains links', () => {
    const wrapper = component.find('.link');
    expect(wrapper.length).toBe(3);
  });
});
