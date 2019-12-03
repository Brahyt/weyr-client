import React from 'react';
import ReactDOM from 'react-dom';
import CharInParty from './CharInParty';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter><CharInParty /></BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
