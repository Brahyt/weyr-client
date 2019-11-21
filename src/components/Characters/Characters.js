import React from 'react';
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import CharacterList from './CharacterList'
import CreateCharacter from './CreateCharacter'

class Characters extends React.Component {
  render() {
    return (
      <div>
        <h1>Characters</h1>

        <Route path="/characters/create" component={CreateCharacter}/>
        <Route path="/characters">
        <NavLink to="/characters/create">Create</NavLink>
          <CharacterList/>
        </Route>
      </div>
    );
  }
}

export default Characters;
