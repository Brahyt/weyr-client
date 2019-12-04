import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom'
import './Characters.css'
import CharacterList from './CharacterList'
import CreateCharacter from './CreateCharacter'
import CharacterDetails from './CharacterDetails'
import EditCharacter from './EditCharacter'

class Characters extends React.Component {
  render() {
    return (
      <section className="character-container">
        <h1 data-test='title'>Characters</h1>
        <NavLink to="/characters/create">Create</NavLink>
        <Switch>
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
              deleteChar={this.props.deleteChar} 
            />
          )}
        />
        <Route
          exact path="/characters/create"
          render={({match, history, location})=>(
            <CreateCharacter
              stickers={this.props.stickers}
              parties={this.props.parties}
              handleSubmitChar={this.props.handleSubmitChar}
              history={history}
            />
          )}
        />
        <Route
          exact path="/characters/:id"
          render={({match, history, location}) => (
            <CharacterDetails
              match={match}
              character={this.props.character}
              linkToChar={this.props.linkToChar}
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
        </Switch>
      </section>

    )
  }
}
export default Characters;
