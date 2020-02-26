import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './CharacterDetails.css';

function CharacterDetails(props) {
  useEffect(() => {
    props.linkToChar(props.match.params.id);
  },[]);
  const {character} = props;
  const {equipment, stickers} = props.character;
  /*Create a list of stickers if User's Character has stickers
   * Otherwise display message that you have no stickers*/
  const buildStickers = () => {
    if (stickers[0].title === 'None')
      return (
        <p>
          <b>You have no stickers yet.</b>
        </p>
      );
    return stickers.map(sticker => {
      if (sticker.title !== 'None') {
        return (
          <>
            <h4>{sticker.title}</h4>
            <p>{sticker.description}</p>
            <p>
              Cost: <em>{sticker.cost}</em>
            </p>
          </>
        );
      }
    });
  };
  return (
    <div className="char-details-page" data-test="char-details-page">
      <h2>{character.name}</h2>
      <h4>
        {character.char_class} - {character.sub_class}
      </h4>
      <div className="details">
        <p>
          Health: <em>{character.health}</em>
        </p>
        <p>
          XP: <em>{character.xp}</em>
        </p>
        <p>
          Hand Size: <em>{character.hand_size}</em>
        </p>
      </div>
      <h3>Equipment</h3>
      <div className="equipment">
        <p>Arcane: {equipment ? equipment.arcane : ''}</p>
        <p>Deception: {equipment ? equipment.deception : ''}</p>
        <p>Martial: {equipment ? equipment.martial : ''}</p>
        <p>Devotion: {equipment ? equipment.devotion : ''}</p>
      </div>
      <div className="stickers">
        <h3>Stickers</h3>
        {!stickers ? '' : buildStickers()}
      </div>
      <NavLink to="/characters/edit">Edit</NavLink>
    </div>
  );
}

export default CharacterDetails;
