import React from 'react';
import ReactDOM from 'react-dom';
import Parties from './Parties';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Parties />
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
