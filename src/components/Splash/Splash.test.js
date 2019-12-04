import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Splash from './Splash';
import {shallow} from 'enzyme';


describe("Splash Component", () => {
  it('renders without crashing', () => {
    const component = shallow(<Splash />)
    const wrapper = component.find('img')
    expect(wrapper.length).toBe(1)
  });

})

