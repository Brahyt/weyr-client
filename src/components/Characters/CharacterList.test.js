import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CharacterList from './CharacterList';

const char = []
const props = []

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CharacterList 
      key={char.char_id}
      charProps={char}
      linkToChar={props.linkToChar}
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});
