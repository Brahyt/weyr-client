import React from 'react';
import CharInParty from './CharInParty';

function EachParty(props) {
  const charactersInParty = props.characters.filter(char => {
    return char.party_id === props.party_id
  })
  return (
    <div>
      <h3>{props.name}</h3>
      <button
        onClick={(e) => props.deleteParty(e, props.party_id)}
      >Delete</button>
      {charactersInParty.map(char => {
        return(
        <CharInParty
          key={char.char_id}
          id={char.char_id}
          name={char.name}
          class={char.char_class}
          sub_class={char.sub_class}
          health={char.health}
          xp={char.xp}
          removeChar={props.removeChar}
        />
        )
      })}
    </div>
  );
}

export default EachParty;

