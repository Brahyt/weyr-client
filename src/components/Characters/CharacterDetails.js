import React from 'react';
import {NavLink} from 'react-router-dom';

function CharacterDetails(props) {
  const {character} = props
  return (
    <div>
      <h2>{character.name}</h2>
      <h3>{character.char_class} - {character.sub_class}</h3>
      <NavLink to="/characters/edit">Edit</NavLink>
    </div>

  );
}

export default CharacterDetails;
