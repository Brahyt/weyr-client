import React, {useRef} from 'react';
import './CreateCharacter.css'

function CreateCharacter(props) {
  const nameRef = useRef()
  const raceRef = useRef()
  const char_classRef = useRef()
  const sub_classRef = useRef()
  const xpRef = useRef()
  const hand_sizeRef = useRef()
  const healthRef = useRef()
  const party_idRef = useRef()
  const user_idRef = useRef()
  const sticker_1_idRef = useRef()
  const sticker_2_idRef = useRef()
  const sticker_3_idRef = useRef()
  const sticker_4_idRef = useRef()
  const sticker_5_idRef = useRef()
  const sticker_6_idRef = useRef()
  const arcaneRef = useRef()
  const deceptionRef = useRef()
  const martialRef = useRef()
  const devotionRef = useRef()

  const charactorReducer = (state, action) => {
    if(action.type === 'changeValue'){
      const charTrait = action.ref.current.name
      const charValue = action.ref.current.value
      return {
        ...state,
        [charTrait]: charValue
      }
    }
    else if(action.type === 'submit'){
        props.handleSubmitChar(action.event, state)
        props.history.push('/characters')
        props.takeStep()
      return state
    }
  }
  const [state, dispatch] = React.useReducer(
    charactorReducer,
    {
      name: '',
      race: 'Human',
      char_class: 'Arcane',
      sub_class: 'Wizard',
      xp: '0',
      hand_size: '0',
      health: '0',
      party_id: '0',
      user_id: '1',
      sticker_1_id: '1',
      sticker_2_id: '1',
      sticker_3_id: '1',
      sticker_4_id: '1',
      sticker_5_id: '1',
      sticker_6_id: '1',
      arcane: '0',
      deception: '0',
      martial: '0',
      devotion: '0'
    }
  )
  const cancelCreateChar = (e) => {
    e.preventDefault();
    props.history.push('/characters')
  }
    /*standardize values from 0-15*/
    const selectNum = [...Array(16).keys()]
    return (
      <div className="char-form-container" data-test="char-form-container">
        <form
          onSubmit={(e) => dispatch({type: "submit", event: e})}
        >
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={state.name}
              ref={nameRef}
              onChange={() => dispatch({type: 'changeValue', ref: nameRef})}
            />
          </label>
          <label>
            Race:
            <select
              id="race"
              name="race"
              value={state.race}
              ref={raceRef}
              onChange={() => dispatch({type: 'changeValue', ref: raceRef})}
            >
              <option value="Human">Human</option>
              <option value="Shield Dwarf">Shield Dwarf</option>
              <option value="Half-Orc">Half-Orc</option>
              <option value="Half-Elf">Half-Elf</option>
              <option value="Sun-Elf">Sun-Elf</option>
            </select>
          </label>
          <label>
            Class:
            <select
              id="char_class"
              name="char_class"
              value={state.char_class}
              ref={char_classRef}
              onChange={() => dispatch({type: 'changeValue', ref: char_classRef})}
            >
              <option value="Arcane">Arcane</option>
              <option value="Deception">Deception</option>
              <option value="Martial">Martial</option>
              <option value="Devotion">Devotion</option>
            </select>
          </label>
          <label>
            Sub Class:
            <select
              id="sub_class"
              name="sub_class"
              value={state.sub_class}
              ref={sub_classRef}
              onChange={() => dispatch({type: 'changeValue', ref: sub_classRef})}
            >
              <option value="Wizard">Wizard</option>
              <option value="Rogue">Rogue</option>
              <option value="Fighter">Fighter</option>
              <option value="Cleric">Cleric</option>
            </select>
          </label>
          <label>
            XP:
            <select
              id="xp"
              name="xp"
              value={state.xp}
              ref={xpRef}
              onChange={() => dispatch({type: 'changeValue', ref: xpRef})}
            >
              {selectNum.map(num => {
                return <option key={num} value={num}>{num}</option>
              })}
            </select>
          </label>
          <label>
            Hand Size:
            <select
              id="hand_size" 
              name="hand_size"
              value={state.hand_size}
              ref={hand_sizeRef}
              onChange={() => dispatch({type: 'changeValue', ref: hand_sizeRef})}
            >
              {selectNum.map(num => {
                return <option key={num} value={num}>{num}</option>
              })}
            </select>
          </label>
          <label>
            Health:
            <select
              id="health"
              name="health"
              value={state.health}
              ref={healthRef}
              onChange={() => dispatch({type: 'changeValue', ref: healthRef})}
            >
              {selectNum.map(num => {
                return <option key={num} value={num}>{num}</option>
              })}

            </select>
          </label>
          <label className="party-choice">
            Party:
            <select
              id="party_id"
              name="party_id"
              value={state.party_id}
              ref={party_idRef}
              onChange={() => dispatch({type: 'changeValue', ref: party_idRef})}
            >
              <option value="0">None</option>
              {props.parties.map(party => {
                return <option 
                  key={party.party_id} 
                  value={party.party_id}>{party.name}</option>
              })}
            </select>
          </label>
          <label>
            Arcane:
            <select
              id="arcane"
              name="arcane"
              value={state.arcane}
              ref={arcaneRef}
              onChange={() => dispatch({type: 'changeValue', ref: arcaneRef})}
            >
              {selectNum.map(num => {
                return <option key={num} value={num}>{num}</option>
              })}

            </select>
          </label>
          <label>
            Deception:
            <select
              id="deception" 
              name="deception"
              value={state.deception}
              ref={deceptionRef}
              onChange={() => dispatch({type: 'changeValue', ref: deceptionRef})}
            >
              {selectNum.map(num => {
                return <option key={num} value={num}>{num}</option>
              })}

            </select>
          </label>
          <label>
            Martial:
            <select 
              id="martial"
              name="martial"
              value={state.martial}
              ref={martialRef}
              onChange={() => dispatch({type: 'changeValue', ref: martialRef})}
            >
              {selectNum.map(num => {
                return <option key={num} value={num}>{num}</option>
              })}
            </select>
          </label>
          <label>
            Devotion:
            <select 
              id="devotion" 
              name="devotion"
              value={state.devotion}
              ref={devotionRef}
              onChange={() => dispatch({type: 'changeValue', ref: devotionRef})}
            >
              {selectNum.map(num => {
                return <option key={num} value={num}>{num}</option>
              })}
            </select>
          </label>
          <label>
            Sticker 1:
            <select
              id="sticker_1_id"
              name="sticker_1_id"
              value={state.sticker_1_id}
              ref={sticker_1_idRef}
              onChange={() => dispatch({type: 'changeValue', ref: sticker_1_idRef})}
            >
              {props.stickers.map(sticker => {
                return <option key={sticker.sticker_id} value={sticker.sticker_id}>{sticker.sticker_title}</option>
              })}
            </select>
          </label>
          <label>
            Sticker 2:
            <select 
              id="sticker_2_id" 
              name="sticker_2_id"
              value={state.sticker_2_id}
              ref={sticker_2_idRef}
              onChange={() => dispatch({type: 'changeValue', ref: sticker_2_idRef})}
            >
              {props.stickers.map(sticker => {
                return <option key={sticker.sticker_id} value={sticker.sticker_id}>{sticker.sticker_title}</option>
              })}
            </select>
          </label>
          <label>
            Sticker 3:
            <select 
              id="sticker_3_id" 
              name="sticker_3_id"
              value={state.sticker_3_id}
              ref={sticker_3_idRef}
              onChange={() => dispatch({type: 'changeValue', ref: sticker_3_idRef})}
            >
              {props.stickers.map(sticker => {
                return <option key={sticker.sticker_id} value={sticker.sticker_id}>{sticker.sticker_title}</option>
              })}
            </select>
          </label>
          <label>
            Sticker 4:
            <select 
              id="sticker_4_id"
              name="sticker_4_id"
              value={state.sticker_4_id}
              ref={sticker_4_idRef}
              onChange={() => dispatch({type: 'changeValue', ref: sticker_4_idRef})}
            >
              {props.stickers.map(sticker => {
                return <option key={sticker.sticker_id} value={sticker.sticker_id}>{sticker.sticker_title}</option>
              })}
            </select>
          </label>
          <label>
            Sticker 5:
            <select 
              id="sticker_5_id"
              name="sticker_5_id"
              value={state.sticker_5_id}
              ref={sticker_5_idRef}
              onChange={() => dispatch({type: 'changeValue', ref: sticker_5_idRef})}
            >
              {props.stickers.map(sticker => {
                return <option key={sticker.sticker_id} value={sticker.sticker_id}>{sticker.sticker_title}</option>
              })}
            </select>
          </label>
          <label>
            Sticker 6:
            <select 
              id="sticker_6_id"
              name="sticker_6_id"
              value={state.sticker_6_id}
              ref={sticker_6_idRef}
              onChange={() => dispatch({type: 'changeValue', ref: sticker_6_idRef})}
            >
              {props.stickers.map(sticker => {
                return <option key={sticker.sticker_id} value={sticker.sticker_id}>{sticker.sticker_title}</option>
              })}
            </select>
          </label>
          <button className="create-char-button">Create</button>
          <button
            onClick={(e) => cancelCreateChar(e)}
          >Cancel</button>
        </form>
      </div>
    );
  }
export default CreateCharacter;
