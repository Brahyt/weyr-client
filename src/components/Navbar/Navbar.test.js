import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import {mount} from 'enzyme';

it('renders without crashing', () => {
  const wrapper = mount(<BrowserRouter><Navbar /></BrowserRouter>)
  console.log(wrapper)
});
