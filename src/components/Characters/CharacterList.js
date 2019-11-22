import React from 'react';
import EachCharOnList from './EachCharOnList'

function CharacterList(props) {
  return (
    <div>
      {props.charProps.map(char => {
        return <EachCharOnList
          key={char.char_id}
          charProps={char}
        />
      })}
    </div>
  );
}

export default CharacterList;
