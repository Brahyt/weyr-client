import React from 'react';
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import CharacterList from './CharacterList'
import CreateCharacter from './CreateCharacter'
import CharacterDetails from './CharacterDetails'

class Characters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      stickers: [],
      character: {},
    }
  }
  componentDidMount() {
    const urls = [
      'http://localhost:8000/api/characters',
      'http://localhost:8000/api/stickers'
    ]
    Promise.all(urls.map(url => {
      return fetch(url)
        .then(res => res.json())
        .then(data => {
          return data
        })
    }))
      .then(data => {
        this.setState({
          characters: [...data[0]],
          stickers: [...data[1]],
        })
      })
    //    fetch('http://localhost:8000/api/characters')
    //      .then(res => res.json())
    //      .then(data => {
    //        this.setState({characters: [...data]})
    //      })
  }
  grabSingleChar = (id) => {
    fetch(`http://localhost:8000/api/characters/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          ...this.state,
          character: {...data}
        })
      })
  }

  render() {
    return (
      <div>
        <h1>Characters</h1>
        <Route
          exact path="/characters/:id"
          render={({match, history, location}) => (
            <CharacterDetails 
              character={this.state.character}
            />
          )}
        />
        <Route 
          path="/characters/create" 
          render={({match, history, location})=>(
            <CreateCharacter 
              stickers={this.state.stickers}
            />
          )}
        />
        <Route path="/characters">
        <NavLink to="/characters/create">Create</NavLink>
        <CharacterList
          charProps={this.state.characters}
          linkToChar={this.grabSingleChar}
          character={this.state.character}
          stickers={this.state.stickers}
        />
        </Route>
      </div>
    )
  }
}
export default Characters;
