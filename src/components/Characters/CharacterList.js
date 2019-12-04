import React from 'react';
import EachCharOnList from './EachCharOnList'

function CharacterList(props) {
  return (
    <div data-test="char-list">
      {props.charProps.map(char => {
        return <EachCharOnList
          key={char.char_id}
          charProps={char}
          linkToChar={props.linkToChar}
        />
      })}
    </div>
  );
}

export default CharacterList;
