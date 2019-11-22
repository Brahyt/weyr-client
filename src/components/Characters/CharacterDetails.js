import React from 'react';

function CharacterDetails(props) {
  const {character} = props
  return (
    <div>
      <h2>{character.name}</h2>
      <h3>{character.char_class} - {character.sub_class}</h3>
    </div>
  );
}

export default CharacterDetails;
