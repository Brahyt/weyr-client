import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Characters from './Characters';
import {BrowserRouter} from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Characters /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
