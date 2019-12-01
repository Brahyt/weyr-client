import React from 'react';
import { Link } from 'react-router-dom';
import './EachCharOnList.css'

function EachCharOnList (props) {
  const char = props.charProps
    return (
      <Link
        to={`/characters/${char.char_id}`}
        onClick={() => props.linkToChar(char.char_id)}
      >
      <div className="each-char">
        <h3>{char.name}</h3>
        <div className="stats">
          <div className="class-race">
            <p>Class: <em>{char.char_class} - {char.sub_class}</em></p>
            <p>Race: <em>{char.race}</em></p>
          </div>
          <div className="class-stats">
            <p>Health: <em>{char.health}</em></p>
            <p>XP: <em>{char.xp}</em></p>
            <p>Hand Size: <em>{char.hand_size}</em></p>
          </div>
        </div>
      </div>
    </Link>
    );
}

export default EachCharOnList;
