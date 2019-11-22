import React from 'react';
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import CharacterList from './CharacterList'
import CreateCharacter from './CreateCharacter'

class Characters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:8000/api/characters')
      .then(res => res.json())
      .then(data => {
        this.setState({characters: [...data]})
      })
  }

  render() {
    return (
      <div>
        <h1>Characters</h1>
        <Route path="/characters/create" component={CreateCharacter}/>
        <Route path="/characters">
        <NavLink to="/characters/create">Create</NavLink>
        <CharacterList
          charProps={this.state.characters}
        />
        </Route>
      </div>
    )
  }
}
export default Characters;
