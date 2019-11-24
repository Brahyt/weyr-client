import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Characters from './components/Characters/Characters'
import Parties from './components/Parties/Parties'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      character: {},
      stickers: [],
      parties: [],
      party:{},
    }
  }
  componentDidMount() {
    this.grabData()
  }

  grabData = () => {
    const urls = [
      'http://localhost:8000/api/characters',
      'http://localhost:8000/api/stickers',
      'http://localhost:8000/api/parties',
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
          parties: [...data[2]],
        })
      })

  }
  sendData = (endpoint, data, option) => {
    return fetch(`http://localhost:8000/api/${endpoint}`, option)
      .then(result => result.json())
      .then(data => {
        this.grabData()
      })

  }
  handleSubmitChar = (e, newCharacter) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCharacter)
    }
    e.preventDefault()
    this.sendData("characters", newCharacter, options)
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

  render(props) {
    return (
      <div className="App">
        <Navbar />
        <Route
          path='/characters' 
          render={({match, history, location}) => (
            <Characters 
              match={match}
              history={history}
              location={location}
              characters={this.state.characters}
              character={this.state.character}
              parties={this.state.parties}
              stickers={this.state.stickers}
              linkToChar={this.grabSingleChar}
              handleSubmitChar={this.handleSubmitChar}
            />
          )}
        />
        <Route 
          path='/parties' 
          render={({match, history, location}) => (
            <Parties
              match={match}
              hostory={history}
              location={location}
              parties={this.state.parties}
              party={this.state.party}
              characters={this.state.characters}
            />
          )}/>
      </div>
    );
  }
}

export default App;
