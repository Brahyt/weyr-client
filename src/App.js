import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Characters from './components/Characters/Characters'
import Parties from './components/Parties/Parties'
import config from './config'
import SignUp from './components/Users/SignUp'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      character: {},
      stickers: [],
      parties: [],
      party:{},
      user:{}
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
      `${config.API_ENDPOINT}/characters`,
      `${config.API_ENDPOINT}/stickers`,
      `${config.API_ENDPOINT}/parties`,
    ]
    Promise.all(urls.map(url => {
      console.log(url)
      return fetch(url, {
        method: "GET",
        headers: {
          //AUTH
        }
      })
        .then(res => {
          if(!res.ok) { 
        }
        else {
          return res.json()
        }})

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
    return fetch(`${config.API_ENDPOINT}/${endpoint}`, options)
      .then(result => result.json())
      .then(data => {
        this.grabData()
        return data
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
  handleCreateUser = (e, user) => {
    e.preventDefault()
    const {user_email, user_password} = user
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_email: user_email,
        user_password: user_password
      })
    }
    this.sendData('users', options)
      .then(result => {
        if(result !== "User Exists") {
          this.setState({
            user: {
              user_id: result.user_id,
              user_name: result.user_email
            }
          })
        } else {
          alert("That user exists")
        }
      } )
  }
  //  handleRemoveChar = (e, characterId) => {
  //    const grabChar = this.state.characters.filter(char => char.char_id === characterId)
  //    const patchData = {
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
    fetch(`${config.API_ENDPOINT}/characters/${id}`)
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
        <Route path='/signup' 
          render={({match, history, location}) => (
            <SignUp
              createUser={this.handleCreateUser}
              history={history}
            />
          )}
        />
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
