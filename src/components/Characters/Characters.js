import React from 'react';
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import CharacterList from './CharacterList'
import CreateCharacter from './CreateCharacter'
import CharacterDetails from './CharacterDetails'

class Characters extends React.Component {
  render() {
    return (
      <div>
        <h1>Characters</h1>
        <Route
          exact path="/characters/:id"
          render={({match, history, location}) => (
            <CharacterDetails 
              character={this.props.character}
            />
          )}
        />
        <Route
          path="/characters/create"
          render={({match, history, location})=>(
            <CreateCharacter
              stickers={this.props.stickers}
              parties={this.props.parties}
              handleSubmitChar={this.props.handleSubmitChar}
              history={history}
            />
          )}
        />
        <Route path="/characters">
        <NavLink to="/characters/create">Create</NavLink>
        <CharacterList
          charProps={this.props.characters}
          linkToChar={this.props.linkToChar}
          character={this.props.character}
          stickers={this.props.stickers}
        />
        </Route>
      </div>
    )
  }
}
export default Characters;
