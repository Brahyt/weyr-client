import React from 'react';
import ReactDOM from 'react-dom';
import CreateParty from './CharInParty';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CreateParty />
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
