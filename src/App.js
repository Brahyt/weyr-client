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

  handleDeleteParty = (e, id) => {
    e.preventDefault()
    console.log(id)
    const options = {
      method: "DELETE",
    }
    this.sendData(`/parties/${id}`, options)
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
  sendData = (endpoint, options) => {
    return fetch(`http://localhost:8000/api/${endpoint}`, options)
      .then(result => result.json())
      .then(data => {
        console.log('EXPORTING THIS', data)
        this.grabData()
      })

  }
  createParty = (e, name) => {
    e.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: name})
    }
    this.sendData(`parties`, options)
  }
  handleRemoveChar = (e, characterId) => {
    const grabChar = this.state.characters.filter(char => char.char_id === characterId)
    const patchData = {
      party_id: null }

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(patchData)
    }
    e.preventDefault()
    this.sendData(`characters/${characterId}`, options )
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
    this.sendData("characters", options)
  }
  handleEditChar = (e, editedChar) => {
    e.preventDefault()
    const char_id = editedChar.char_id
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedChar)
    }
    this.sendData(`characters/${char_id}`, options)
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
  handleDeleteChar = (e, charId) => {
    e.preventDefault()
    console.log(charId)
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }
    this.sendData(`characters/${charId}`, options)
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
              editChar={this.handleEditChar}
              deleteChar={this.handleDeleteChar}
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
              removeChar={this.handleRemoveChar}
              createParty={this.createParty}
              deleteParty={this.handleDeleteParty}
            />
          )}/>
      </div>
    );
  }
}

export default App;
//
//
//class App extends React.Component {
//  constructor(props) {
//    super(props)
//    this.state = {
//      characters: [],
//      character: {},
//      stickers: [],
//      parties: [],
//      party:{},
//    }
//  }
//  componentDidMount() {
//    this.grabData()
//  }
//
//  grabData = () => {
//    const urls = [
//      'http://localhost:8000/api/characters',
//      'http://localhost:8000/api/stickers',
//      'http://localhost:8000/api/parties',
//    ]
//    Promise.all(urls.map(url => {
//      return fetch(url)
//        .then(res => res.json())
//        .then(data => {
//          return data
//        })
//    }))
//      .then(data => {
//        this.setState({
//          characters: [...data[0]],
//          stickers: [...data[1]],
//          parties: [...data[2]],
//        })
//      })
//
//  }
//  sendData = (endpoint, options) => {
//    return fetch(`http://localhost:8000/api/${endpoint}`, options)
//      .then(result => result.json())
//      .then(data => {
//        console.log(data)
//        this.grabData()
//      })
//
//  }
//  changeCreateParty = (e, name) => {
//
//  }
//  handleRemoveChar = (e, characterId) => {
//    const grabChar = this.state.characters.filter(char => char.char_id === characterId)
//    const patchData = {
//      //      ...grabChar[0],
//      party_id: null }
//
//    const options = {
//      method: "PATCH",
//      headers: {
//        "Content-Type": "application/json"
//      },
//      body: JSON.stringify(patchData)
//    }
//    e.preventDefault()
//    this.sendData(`characters/${characterId}`, options )
//  }
//
//  handleSubmitChar = (e, newCharacter) => {
//    const options = {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json"
//      },
//      body: JSON.stringify(newCharacter)
//    }
//    e.preventDefault()
//    this.sendData("characters", options)
//  }
//  grabSingleChar = (id) => {
//    fetch(`http://localhost:8000/api/characters/${id}`)
//      .then(res => res.json())
//      .then(data => {
//        this.setState({
//          ...this.state,
//          character: {...data}
//        })
//      })
//  }
//
//  render(props) {
//    return (
//      <div className="App">
//        <Navbar />
//        <Route
//          path='/characters' 
//          render={({match, history, location}) => (
//            <Characters 
//              match={match}
//              history={history}
//              location={location}
//              characters={this.state.characters}
//              character={this.state.character}
//              parties={this.state.parties}
//              stickers={this.state.stickers}
//              linkToChar={this.grabSingleChar}
//              handleSubmitChar={this.handleSubmitChar}
//            />
//          )}
//        />
//        <Route 
//          path='/parties' 
//          render={({match, history, location}) => (
//            <Parties
//              match={match}
//              hostory={history}
//              location={location}
//              parties={this.state.parties}
//              party={this.state.party}
//              characters={this.state.characters}
//              removeChar={this.handleRemoveChar}
//              deleteParty={this.handleDeleteParty}
//            />
//          )}/>
//      </div>
//    );
//  }
//}
//
//export default App;
