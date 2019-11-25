import React from 'react';
import { NavLink } from 'react-router-dom';
import PartiesList from './PartiesList';
import CreateParty from './CreateParty'

function Parties(props) {
  return (
    <div>
      <h1>Your Parties</h1>
      <CreateParty
        createParty={props.createParty}
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
