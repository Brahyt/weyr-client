import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import PartiesList from './PartiesList';
import CreateParty from './CreateParty'

function Parties(props) {
  return (
    <div>
      <h1>Your Parties</h1>
      <NavLink to="/parties/create">
        Create
      </NavLink>
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
      />
    </div>
  );
}

export default Parties;
