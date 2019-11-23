import React from 'react';
import ReactDOM from 'react-dom';
import CreateCharacter from './CreateCharacter';

const parties = []
const stickers = []

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CreateCharacter 
      parties={parties}
      stickers={stickers}
    />
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
