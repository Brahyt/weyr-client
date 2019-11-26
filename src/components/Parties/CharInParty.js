import React from 'react';

function CharInParty(props) {
  console.log(props)
  return (
    <div>
      <h4>{props.name}</h4>
      <h5>{props.class} - {props.sub_class}</h5>
      <h6>Xp: {props.xp}</h6>
      <h6>Health: {props.health}</h6>
    </div>
  );
}

export default CharInParty;
