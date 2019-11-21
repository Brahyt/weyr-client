import React from 'react';
import { Route } from 'react-router-dom'

function CharacterList() {
  return (
    <div>
      <Route exact path="/characters">
        <h1>list</h1>
      </Route>
    </div>
  );
}

export default CharacterList;
