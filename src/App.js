import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Characters from './components/Characters/Characters';
import Parties from './components/Parties/Parties';
import config from './config';
import SignUp from './components/Users/SignUp';
import LogIn from './components/Users/LogIn';
import Splash from './components/Splash/Splash';
import TokenService from './services/token-service';
import Joyride from 'react-joyride';
import fixtureSteps from './fixtures/fixtures';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      character: {},
      stickers: [],
      parties: [],
      party: {},
      loggedIn: false,
      stepIndex: 0,
      steps: [
      ],
    };
  }
  componentDidMount() {
    if (TokenService.hasAuthToken()) this.grabData();
    /*Load the tutorial for new users with No charactors.*/
    this.setState({steps: [...fixtureSteps]})
  }

  handleDeleteParty = (e, id) => {
    e.preventDefault();
    const options = {
      method: 'DELETE',
      headers: {
        Authorization: `${TokenService.getAuthToken()}`,
      },
    };
    this.sendData(`/parties/${id}`, options);
  };
  grabData = () => {
    const urls = [
      `${config.API_ENDPOINT}/characters`,
      `${config.API_ENDPOINT}/stickers`,
      `${config.API_ENDPOINT}/parties`,
    ];
    Promise.all(
      urls.map(url => {
        return fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `${TokenService.getAuthToken()}`,
          },
        })
          .then(res => {
            if (!res.ok) {
            } else {
              return res.json();
            }
          })

          .then(data => {
            return data;
          });
      }),
    ).then(data => {
      this.setState({
        characters: [...data[0]],
        stickers: [...data[1]],
        parties: [...data[2]],
      });
    });
  };
  sendData = (endpoint, options) => {
    return fetch(`${config.API_ENDPOINT}/${endpoint}`, options)
      .then(result => result.json())
      .then(data => {
        if (TokenService.hasAuthToken()) this.grabData();
        return data;
      });
  };
  createParty = (e, name) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({name: name}),
    };
    this.sendData(`parties`, options);
  };
  handleCreateUser = (e, user) => {
    e.preventDefault();
    const {user_email, user_password} = user;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        user_email: user_email,
        user_password: user_password,
      }),
    };
    this.sendData('users', options).then(result => {
      if (result !== 'User Exists') {
        this.setState({
          user: {
            user_id: result.user_id,
            user_name: result.user_email,
          },
        });
      } else {
        alert('That user exists');
      }
    });
  };
  handleSubmitChar = (e, newCharacter) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newCharacter),
    };
    e.preventDefault();
    this.sendData('characters', options);
  };
  handleEditChar = (e, editedChar) => {
    e.preventDefault();
    const char_id = editedChar.char_id;
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(editedChar),
    };
    this.sendData(`characters/${char_id}`, options);
  };
  grabSingleChar = id => {
    fetch(`${config.API_ENDPOINT}/characters/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `${TokenService.getAuthToken()}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          ...this.state,
          character: {...data},
        });
      });
  };
  handleDeleteChar = (e, charId) => {
    e.preventDefault();
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${TokenService.getAuthToken()}`,
      },
    };
    this.sendData(`characters/${charId}`, options);
    this.props.history.push('/characters');
  };
  handleLogIn = (e, userCred) => {
    e.preventDefault();
    const {user_email, user_password} = userCred;
    const user = {
      user_email: user_email,
      user_password: user_password,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    this.sendData('auth/login', options)
      .then(result => {
        if (!result.authToken) return result;
        return TokenService.saveAuthToken(result.authToken);
      })
      .then(() => this.props.history.push('/'))
      .then(() =>
        TokenService.hasAuthToken()
          ? this.grabData()
          : alert('Wrong user or password'),
      );
  };
  changeStepIndex = () => {
    const stepIndex = this.state.stepIndex + 1;
    this.setState({
      stepIndex,
    });
  };
  joyRide = () => {
    const {steps, stepIndex} = this.state;
    return (
      <div>
        <Joyride
          steps={steps}
          spotlightClicks={true}
          stepIndex={stepIndex}
          styles={{
            options: {
              arrowColor: '#fbbc08',
              backgroundColor: '#fbbc08',
              height: 100,
            },
            tooltip: {
              fontSize: 20,
              fontFamily: 'serif',
            },
          }}
        />
      </div>
    );
  };

  render(props) {
    console.log(this.state);
    return (
      <>
        {!this.state.characters.length ? this.joyRide() : null}
        <header>
          <Route
            path="/"
            render={({match, history, loctaion}) => (
              <Navbar history={history} takeStep={this.changeStepIndex} />
            )}
          />
        </header>
        <div className="App">
          <Route
            path="/signup"
            render={({match, history, location}) => (
              <SignUp createUser={this.handleCreateUser} history={history} />
            )}
          />
          <Route
            path="/login"
            render={({match, history, location}) => (
              <LogIn logIn={this.handleLogIn} history={history} />
            )}
          />
          <Route
            path="/characters"
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
                takeStep={this.changeStepIndex}
              />
            )}
          />
          <Route
            path="/parties"
            render={({match, history, location}) => (
              <Parties
                match={match}
                history={history}
                location={location}
                parties={this.state.parties}
                party={this.state.party}
                characters={this.state.characters}
                removeChar={this.handleRemoveChar}
                createParty={this.createParty}
                deleteParty={this.handleDeleteParty}
                takeStep={this.changeStepIndex}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={({match, history, location}) => (
              <Splash history={history} match={match} location={location} />
            )}
          />
        </div>
      </>
    );
  }
}

export default App;
