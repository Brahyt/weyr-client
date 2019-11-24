import React from 'react';
import { NavLink } from 'react-router-dom';
import PartiesList from './PartiesList';

function Parties(props) {
  return (
    <div>
      <h1>Your Parties</h1>
      <PartiesList
        parties={props.parties}
        characters={props.characters}
      />
    </div>
  );
}

export default Parties;
