import React from 'react';
import EachParty from './EachParty'

function PartiesList(props) {
  return (
    <div>
      {props.parties.map(party => {
        return(
          <EachParty
          key={party.party_id}
          name={party.name}
          party_id={party.party_id}
          characters={props.characters}
          removeChar={props.removeChar}
          deleteParty={props.deleteParty}
        />
        )
      })}
    </div>
  );
}

export default PartiesList;
