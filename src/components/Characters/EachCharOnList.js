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
            <p>Class: {char.char_class} - {char.sub_class}</p>
            <p>Race: {char.race}</p>
          </div>
          <div className="class-stats">
            <p>Health: {char.health}</p>
            <p>XP: {char.xp}</p>
            <p>Hand Size: {char.hand_size}</p>
          </div>
          <div className="equip">
            <p>Aracane: {char.arcane}</p>
            <p>Aracane: {char.arcane}</p>
            <p>Aracane: {char.arcane}</p>
            <p>Aracane: {char.arcane}</p>
          </div>
        </div>
      </div>
    </Link>
    );
}

export default EachCharOnList;
