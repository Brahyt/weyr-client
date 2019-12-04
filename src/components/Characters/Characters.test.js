import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Characters from './Characters';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<Characters />)
});
