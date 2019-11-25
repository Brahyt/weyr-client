import React from 'react';
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import CharacterList from './CharacterList'
import CreateCharacter from './CreateCharacter'
import CharacterDetails from './CharacterDetails'
import EditCharacter from './EditCharacter'

class Characters extends React.Component {
  render() {
    return (
      <div>
        <h1>Characters</h1>
        <NavLink to="/characters/create">Create</NavLink>
        <Route
          exact path="/characters/:id"
          render={({match, history, location}) => (
            <CharacterDetails
              character={this.props.character}
            />
          )}
        />
        <Route
          exact path="/characters/edit"
          render={({match, history, location}) => (
            <EditCharacter
              history={this.props.history}
              stickers={this.props.stickers}
              parties={this.props.parties}
              character={this.props.character}
              characters={this.props.characters}
              editChar={this.props.editChar}
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
