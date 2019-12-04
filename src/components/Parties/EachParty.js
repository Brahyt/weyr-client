import React from 'react';
import CharInParty from './CharInParty';
import './EachParty.css'

function EachParty(props) {
  const charactersInParty = props.characters.filter(char => {
    return char.party_id === props.party_id
  })
  return (
    <div data-test="each-party" key={props.party_id} className="party-list">
      <div className="party-header">
        <h3>{props.name}</h3>
        <button
          onClick={(e) => props.deleteParty(e, props.party_id)}
        >Delete</button>
      </div>
        {charactersInParty.map(char => {
          return(
        <div key={char.char_id} className="char-in-party">
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
      </div>
          )
        })}
    </div>
  );
}

export default EachParty;
