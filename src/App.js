import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Characters from './components/Characters/Characters'
import Parties from './components/Parties/Parties'

class App extends React.Component {

  render(props) {
    return (
      <div className="App">
        <Navbar />
        <Route path='/characters' component={Characters}/>
        <Route path='/parties' component={Parties}/>
      </div>
    );
  }
}

export default App;
