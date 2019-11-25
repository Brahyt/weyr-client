import React from 'react';
import { Route } from 'react-router-dom';
import PartiesList from './PartiesList';
import CreateParty from './CreateParty'

function Parties(props) {
  return (
    <div>
      <h1>Your Parties</h1>
      <Route exact path='/parties/create'>
        <CreateParty
          createParty={props.createParty}
        />
      </Route>
      <PartiesList
        parties={props.parties}
        characters={props.characters}
        removeChar={props.removeChar}
      />
    </div>
  );
}

export default Parties;
