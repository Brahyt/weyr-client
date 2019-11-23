import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EachCharOnList from './EachCharOnList';

const char = {}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <EachCharOnList 
        charProps={char}
      />
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
