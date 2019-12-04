import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import PartiesList from './PartiesList';
import CreateParty from './CreateParty'
import './Parties.css'

function Parties(props) {
  return (
    <div className="parties" data-test="parties">
      <h1>Your Parties</h1>
      <NavLink to="/parties/create">
        Create
      </NavLink>
        <div className="parties-list">
        <Route
          exact path='/parties/create'
          render={({location, match, history}) => (
            <CreateParty
              createParty={props.createParty}
              history={history}
            />
          )}

        />

        <PartiesList
          parties={props.parties}
          characters={props.characters}
          removeChar={props.removeChar}
          deleteParty={props.deleteParty}
          match={props.match}
        />
      </div>
    </div>
  );
}

export default Parties;
