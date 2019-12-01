import React from 'react';
import {NavLink} from 'react-router-dom'
import './CharInParty.css'

function CharInParty(props) {
  return (
    <NavLink to={`characters/${props.id}`}>
      <div className="each-char-in-party">
        <div className="party-name">
          <h3>{props.name}</h3>
        </div>
        <p>{props.class} - {props.sub_class}</p>
        <p>Xp: {props.xp}</p>
        <p>Health: {props.health}</p>
      </div>
    </NavLink>
  );
}

export default CharInParty;
