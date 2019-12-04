import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import {shallow} from 'enzyme';


describe("NavBar Component", () => {
  it('renders without crashing', () => {
    const component = shallow(<Navbar />)
    const wrapper = component.find('nav')
    expect(wrapper.length).toBe(1)
  });

  it('contains links', () => {
    const component = shallow(<Navbar />)
    const wrapper = component.find('.link')
    expect(wrapper.length).toBe(3)
  })
})
