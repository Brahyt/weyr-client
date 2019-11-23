import React from 'react';
import ReactDOM from 'react-dom';
import CharacterDetails from './CharacterDetails';

const characterData = {
  name: "hey"
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CharacterDetails
      character={characterData}
    />
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
