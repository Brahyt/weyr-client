import React from 'react';
import ReactDOM from 'react-dom';
import PartiesList from './PartiesList';

const props = {
  parties: [
    {
      party_id: 1,
      name: "Test Party"
    },
    {
      party_id: 2,
      name: "Test Party 2"
    }
  ]
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <PartiesList
      parties={props.parties}
    />
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
