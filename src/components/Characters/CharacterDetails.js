import React from 'react';
import {NavLink} from 'react-router-dom';
import './CharacterDetails.css';

function CharacterDetails(props) {
  const {character} = props
  const {equipment, stickers} = props.character
  console.log(character)
  return (
    <div>
      <h2>{character.name}</h2>
      <h3>{character.char_class} - {character.sub_class}</h3>
      <div className="details">
        <p>Health: {character.health}</p>
        <p>XP: {character.xp}</p>
        <p>Hand Size: {character.hand_size}</p>
        <p>Arcane: {equipment? equipment.arcane : ''}</p>
        <p>Deception: {equipment ? equipment.deception : ''}</p>
        <p>Martial: {equipment ? equipment.martial : ''}</p>
        <p>Devotion: {equipment ? equipment.devotion : ''}</p>
      </div>
      <div className='stickers'>
        {!stickers ? "" : stickers.map(sticker => {
          return (
            <>
              <h4>{sticker.title}</h4>
              <p>{sticker.description}</p>
              <p>Cost: {sticker.cost}</p>
            </>
          )
        })}
      </div>
      <NavLink to="/characters/edit">Edit</NavLink>
    </div>

  );
}

export default CharacterDetails;
