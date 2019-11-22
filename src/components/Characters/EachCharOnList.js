import React from 'react';
import { Link } from 'react-router-dom';


function EachCharOnList (props) {
  const char = props.charProps
    return (
      <Link 
        to={`/characters/${char.char_id}`}
        onClick={() => props.linkToChar(char.char_id)}
      >
      <div>
        <h3>{char.name}</h3>
        <p>Class: {char.char_class} - {char.sub_class}</p>
        <p>Race: {char.race}</p>
        <p>Health: {char.health}</p>
        <p>XP: {char.xp}</p>
      </div>
    </Link>
    );
}

export default EachCharOnList;
